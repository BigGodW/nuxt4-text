<template>
    <div>
        <main-head-navbar></main-head-navbar>
        <slot></slot>
        <!-- 底部安全区 -->
        <div class="h-14"></div>
        <div class=" fixed left-0 bottom-0 w-full">
            <main-foot-bar></main-foot-bar> 
        </div>
        
    </div>
</template>