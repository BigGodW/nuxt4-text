<template>
    <div>
        <div class="sticky top-0">
            <main-head-back :title="articleId"></main-head-back>
        </div>
        <slot></slot>
        <!-- 底部安全区 -->
    </div>
</template>
<script setup> 
const route = useRoute()
const articleId = route.params.id

</script>