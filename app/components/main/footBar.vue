<template>
    <div>
        <van-tabbar v-model="active" :placeholder="true" :z-index="1000">
        <van-tabbar-item v-for="item in menuList" :icon="item.icon" :name="item.name" :to="item.path">
            {{ item.name }}
        </van-tabbar-item>
    </van-tabbar>
    </div>
</template>
<script setup>
const route = useRoute()
const active = ref('home')
const menuList = [
    { name: 'home', path: '/', icon: "home-o" },
    { name: '文章', path: '/articles', icon: "newspaper-o" },
    { name: 'editor', path: '/editor', icon: 'edit' },
    { name: 'drag', path: '/drag', icon: 'apps-o' },
]
menuList.forEach(item => {
    if (item.path === route.path) {
        active.value = item.name
    }
})
</script>