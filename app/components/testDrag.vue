<template>
    <div>
        <h1>元素拖拽</h1>
        <pre>{{ list }}</pre>
        <draggableComponent v-model="list" itemKey="index"  >
            <template #item="{ element,index }">
                <span class="cursor-move border bg-slate-500 p-2 m-1">{{ index }}- {{ element }} </span>
            </template>
        </draggableComponent>
    </div>
</template>
<script setup>
import draggableComponent from 'vuedraggable';
const list = defineModel()


// 使用: 传入v-model绑定的变量list


</script>