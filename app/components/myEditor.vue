<template>
    <h1>文本编辑器</h1>
    <ClientOnly>
        <div style="border: 1px solid #ccc">
            <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig"
                mode="default" />
            <Editor style="height: 500px; overflow-y: hidden;" v-model="valueHtml" :defaultConfig="editorConfig"
                @onCreated="handleCreated" />
        </div>
    </ClientOnly>
</template>
<script setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()
// 内容 HTML
const valueHtml = defineModel()
const toolbarConfig = {
    excludeKeys: ['uploadVideo'] // 排除不需要的菜单项
}
const editorConfig = {
    placeholder: '请输入内容...',
    MENU_CONF: {
        uploadImage: {
            async customUpload(file, insertFn) {
                const minFile = await compressImage(file, { quality: 0.7 }) // 压缩图片
                const uploadres = await useSupabaseUpload('editor', minFile)
                const url = useSupabaseImgUrl(uploadres)
                insertFn(url)
            }
        }
    }
}
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})
const handleCreated = (editor) => {
    editorRef.value = editor // 记录 editor 实例，重要！
}


</script>