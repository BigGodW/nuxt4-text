<template>
    <div>
        <main-swipe></main-swipe>
    </div>
    <div>
        <van-skeleton v-for="i in 6" :key="i" >
            <template #template>
                <div class="my-4 flex w-full">
                    <van-skeleton-image :image-size="80" />
                    <div class=" flex-1 ml-4">
                        <van-skeleton-title row-width="60%"  />
                        <van-skeleton-paragraph />
                        <van-skeleton-paragraph />
                    </div>
                </div>
            </template>
        </van-skeleton>
    </div>
</template>
<script setup>
</script>
<style></style>