<template>
    <h1>添加轮播图</h1>
    <div>
        <van-cell-group inset>
            <van-field v-model="newCarousel.title" label="标题" placeholder="请输入标题" />
            <van-field v-model="newCarousel.link" label="跳转地址" placeholder="请输入用户名" />
            <van-field v-model="newCarousel.description" rows="2" autosize label="描述" type="textarea" maxlength="50"
                placeholder="请输入描述" show-word-limit />
            <van-field name="uploader" label="上传图片">
                <template #input>
                    <van-uploader v-model="uploadFile" />
                </template>
            </van-field>
            <van-field name="switch" label="是否启用">
                <template #input>
                    <van-switch v-model="newCarousel.is_active" />
                </template>
            </van-field>
        </van-cell-group>
    </div>
</template>
<script setup>
const uploadPath = ''
const newCarousel = {
    title: '',
    image_url: '',
    link: '',
    order: 0,
    is_active: true,
    description: ''
};
// 文件处理
const uploadFile = ref()

</script>