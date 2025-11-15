<template>
    <div class="flex flex-col w-screen h-screen">
        <div class=" h-16">
            <AdminHeaderBar></AdminHeaderBar>
        </div>
        <div class="  flex  flex-1">
            <div class=" flex-none">
                <AdminLeftMenu></AdminLeftMenu>
            </div>
            <div class=" flex-1 bg-blue-50">
                <slot></slot>
            </div>
        </div>
    </div>
</template>