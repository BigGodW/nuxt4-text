<template>
  <div class="flex justify-between items-center m-2">
    <h1>轮播图</h1>
    <button class="btn btn-info btn-sm">添加轮播</button>
  </div>
  <div>
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>ID</th>
            <th>标题</th>
            <th>地址</th>
            <th>图片</th>
            <th>启用</th>
            <th>编辑</th>
          </tr>
        </thead>
        <tbody v-if="carousels">
          <!-- row 1 -->
          <tr v-for="(carousel, index) in carousels">
            <th>{{ index + 1 }}</th>
            <td>{{ carousel.title }}</td>
            <td>{{ carousel.link }}</td>
            <td>
              <img class="w-24" :src="useSupabaseImgUrl(carousel.image_url)" alt="">
            </td>
            <td>
              <input type="checkbox" class="checkbox" v-model="carousel.is_active" @change="changeIsActive(carousel)" />
            </td>
            <td class=" space-x-1">
              <button class="btn btn-xs btn-success" @click="Edit(carousel.id)">编辑</button>
              <button class="btn btn-xs btn-error" @click="delectItem(carousel)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const carousels = ref([])
useAsyncData('getCarousel', async () => {
  const { data } = await useSupabase().from('carousel').select().limit(10)
  carousels.value = data
})
// 修改轮播图状态
const changeIsActive = async (item) => {
  // 修改数据库
  await useSupabase().from('carousel').update({ is_active: item.is_active }).eq('id', item.id)
}
// 删除轮播
const delectItem = async (item) => {
  showConfirmDialog({
    title: '确认删除',
    message:
      '删除' + item.title + "轮播图？",
  })
    .then(
      async () => {
        const res = await useSupabase().from('carousel').delete().eq('id', item.id)
        const newlist = await useSupabase().from('carousel').select().limit(10)
        carousels.value = newlist.data
      }
    )
    .catch(() => {
      // on cancel
    });
}
// 编辑轮播图
const Edit = (id) => {
  navigateTo({
    path: '/admin/carousel/edit',
    query: { "id": id }
  })
}
</script>