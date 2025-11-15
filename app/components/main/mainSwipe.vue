<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in mylist" :key="item.id">{{ item.title }}</van-swipe-item>
        </van-swipe>
    </div>

</template>
<style>
.my-swipe .van-swipe-item {
                color: #fff;
                font-size: 20px;
                line-height: 150px;
                text-align: center;
                background-color: #39a9ed;
            }

</style>
<script setup>
const myswipe = ref([])
const {data:mylist} = await useAsyncData('getSwipeList',async()=>{
    const res = await useSupabase().from('carousel').select('*')
    return res.data
})
myswipe.value = mylist.value

</script>