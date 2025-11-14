<template>
    <div>
        <div>
            <div v-for="i in 10" :key="i">
                <nuxt-link :to="'/article/'+i">
                     <van-skeleton >
                <template #template>
                        <div class="my-4 flex w-full">
                            <van-skeleton-image :image-size="80" />
                            <div class=" flex-1 ml-4">
                                <van-skeleton-title row-width="60%" />
                                <van-skeleton-paragraph />
                                <van-skeleton-paragraph />
                            </div>
                        </div>
                </template>
            </van-skeleton>
                </nuxt-link>
            </div>
           
        </div>
    </div>
</template>