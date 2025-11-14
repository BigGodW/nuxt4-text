<template>
    <div class="">
        <h1>文章页面</h1>
        <div v-for="i in 23" class="h-14">{{ i }}</div>
    </div>
</template>
<script setup>
definePageMeta({
    layout:'article'
})
const route = useRoute()
const articleId = route.params.id


</script>