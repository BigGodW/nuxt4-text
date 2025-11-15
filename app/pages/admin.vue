<template>
    <div>
        
        <div class="breadcrumbs text-sm">
            <ul>
                <li v-for="item in pathArr"><nuxt-link>{{ item }}</nuxt-link></li>
            
            </ul>
        </div>
    </div>
    <nuxt-page></nuxt-page>
</template>
<script setup>
definePageMeta({
    layout: 'admin'
})
const route = useRoute()
const pathArr = ref(route.path.split('/').filter(part => part !== ''))
watch(
  () => route.path,
  (newPath, oldPath) => {
    pathArr.value = newPath.split('/').filter(part => part !== '')
  }
)
</script>