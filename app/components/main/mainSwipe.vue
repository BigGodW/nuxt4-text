<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" >
            <van-swipe-item class=" relative" v-for="item in myCarousel" :key="item.id">
                <img class=" w-full aspect-16/6 object-cover" v-if="item.image_url" :src="useSupabaseImgUrl(item.image_url)" :alt="item.title">
                <h1 class="text-center absolute bottom-0 left-0 right-0 font-semibold leading-5 bg-white/30 p-1">{{ item.title }}</h1>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script setup>
const myCarousel = ref([])
useAsyncData('getCarousel',async()=>{
    const {data} = await useSupabase().from('carousel').select().eq('is_active',true)
    if(data){
        myCarousel.value = data
    }
})
</script>