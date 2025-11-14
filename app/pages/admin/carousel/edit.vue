<template>
    <div class="flex justify-between items-center m-2">
        <h1>轮播图编辑</h1>
        <button class="btn btn-info btn-sm" @click="$router.back()">取消</button>
    </div>
    <div>
        <van-cell-group inset v-if="newCarousel">
            <van-field v-model="newCarousel.title" label="标题" placeholder="请输入标题" />
            <van-field v-model="newCarousel.link" label="跳转地址" placeholder="请输入用户名" />
            <van-field v-model="newCarousel.description" rows="2" autosize label="描述" type="textarea" maxlength="50"
                placeholder="请输入描述" show-word-limit />
            <van-field name="uploadImg" label="上传图片">
                <template #input>
                    <van-uploader v-model="fileList" :max-count="1" :after-read="uploadFile" />
                </template>
            </van-field>
            <van-field name="switch" label="是否启用">
                <template #input>
                    <van-switch v-model="newCarousel.is_active" />
                </template>
            </van-field>
            <div class="p-2 m-4">
                <van-button block="" type="primary" @click="saveCarousel" native-type="submit">
                    保存轮播
                </van-button>
            </div>
        </van-cell-group>

    </div>
</template>
<script setup>
const newCarousel = ref({
    title: '',
    image_url: '',
    link: '',
    order: 0,
    is_active: true,
    description: ''
});
const fileList = ref([])
const route = useRoute()
const { id } = route.query
await useAsyncData('getCarouselId', async () => {
    const res = await useSupabase().from('carousel').select().eq('id', id)
    if (res.data) {
        newCarousel.value = res.data[0]
        const fileUrl = useSupabaseImgUrl(newCarousel.value.image_url)
        fileList.value.push({ url: fileUrl })
    }

})
// 文件处理
const uploadFile = async (file) => {
    const fileitem = file.file
    // 压缩图片
    try {
        const minFile = await compressImage(fileitem)
        const pathFull = await useSupabaseUpload('carousel', minFile)
        newCarousel.value.image_url = pathFull
    } catch (err) {
        console.error('图片压缩上传失败')
    }
}
// 保存轮播
const saveCarousel = async () => {
    if (newCarousel.value.title && newCarousel.value.image_url) {
        console.log('提交信息')
        const res = await useSupabase().from('carousel').update({ ...newCarousel.value }).eq('id', id)
        console.log(res)
        if (!res.err) {
            // 提交成功
            showSuccessToast('添加成功');
            newCarousel.value = {}
            navigateTo('/admin/carousel/list')
        }
    } else {
        showFailToast('失败文案')
    }
}
</script>