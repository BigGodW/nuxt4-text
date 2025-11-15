<template>
    <h1>添加轮播图</h1>
    <div>
        <van-cell-group inset>
            <van-field v-model="newCarousel.title" label="标题" placeholder="请输入标题" />
            <van-field v-model="newCarousel.link" label="跳转地址" placeholder="请输入用户名" />
            <van-field v-model="newCarousel.description" rows="2" autosize label="描述" type="textarea" maxlength="50"
                placeholder="请输入描述" show-word-limit />
            <van-field name="uploadImg" label="上传图片">
                <template #input>
                    <van-uploader v-model="fileList" :max-count="1"  :after-read="uploadFile" />
                </template>
            </van-field>
            <van-field name="switch" label="是否启用">
                <template #input>
                    <van-switch v-model="newCarousel.is_active" />
                </template>
            </van-field>
            <div class="p-2 m-4">
            <van-button block="" type="primary" @click="addCarousel" native-type="submit">
                添加轮播
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
// 文件处理
const fileList = ref()
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
// 添加轮播
const addCarousel = async()=>{

    if(newCarousel.value.title && newCarousel.value.image_url){
        console.log('提交信息')
        const res = await useSupabase().from('carousel').insert({...newCarousel.value})
        console.log(res)
        if(!res.err){
            // 提交成功
            showSuccessToast('添加成功');
            newCarousel.value = {}
            navigateTo('/admin/carousel/list')
        }
    }else{
        showFailToast('信息不完整')
    }
}
</script>