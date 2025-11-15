<!-- pages/index.vue -->
<template>
  <div class=" flex flex-col items-center bg-slate-100 h-full justify-center">
    <h1 class=" text-center text-2xl my-3">管理后台</h1>
    <!-- 登录表单 -->
    <van-form @submit="signIn">
      <van-cell-group inset>
        <van-field v-model="email" name="邮箱" label="邮箱" placeholder="邮箱"
          :rules="[{ required: true, message: '请填写邮箱' }]" />
        <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]" />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>

  </div>
</template>

<script setup>
// 使用 Supabase 组合式函数
const { auth } = useSupabaseClient()
const router = useRouter()
const route = useRoute()
const email = ref('')
const password = ref('')
// 登录函数
const signIn = async () => {
  showToast('登录中...');
  const { error } = await auth.signInWithPassword({
    email: email.value,
    password: password.value
  })
  if (error) {
    showFailToast('账号或密码错误');
    console.error('登录错误:', error.message)

  }else{
    showSuccessToast('登录成功');
    const redirect = route.query.redirect || '/admin'
    setTimeout(() => {
      router.push(redirect)
    }, 1000)
    }
}
</script>