<template>
    <van-nav-bar :title="title" left-arrow @click-left="clickBack" @click-right="clickShare">
        <template #right>
            <van-icon name="share-o" size="18" />
        </template>
    </van-nav-bar>
    <van-share-sheet :z-index="2000" v-model:show="showShare" title="立即分享给好友" :options="shareOptions" @select="onSelect" />
</template>
<script setup>
const props = defineProps(['title'])
const router = useRouter()
const clickBack = () => {
    if (window.history.state.back) {
        router.back()
    } else {
        // 没有可回退的记录，跳转首页
        router.push('/')
    }
}
const clickShare = () => {
    showShare.value = true
}
// 分享面板
const showShare = ref(false)
const shareOptions = [
    { name: '微信', icon: 'wechat' },
    { name: '微博', icon: 'weibo' },
    { name: '复制链接', icon: 'link' },
    { name: '分享海报', icon: 'poster' },
    { name: '二维码', icon: 'qrcode' },
]
const onSelect = (option) => {
    showToast(option.name);
    showShare.value = false;
};


</script>