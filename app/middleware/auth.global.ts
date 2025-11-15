export default defineNuxtRouteMiddleware((to, from) => {
    // 判断用户是否登陆 未登陆跳转登陆页面
    // const user = useSupabaseUser()
    // if (to.path.startsWith('/admin') && !user.value) {
    //     // 未登录 设置登陆跳转
    //     return navigateTo({
    //         path: '/login',
    //         query: { redirect: to.fullPath }
    //     });
    // }   
})