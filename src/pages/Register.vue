<template>
  <van-form @submit="submitForm" @failed="onFailed" :model="form">
    <van-cell-group>
      <van-field 
        v-model="form.username" 
        label="账号：" 
        placeholder="请输入账号" 
        clearable
        name="username"
        :rules="usernameRules"
      ></van-field>
    </van-cell-group>
    <van-cell-group> 
      <van-field 
        v-model="form.password" 
        label="密码：" 
        placeholder="请输入密码" 
        clearable
        type="password"
        name="password"
        :rules="passwordRules"
      ></van-field> 
    </van-cell-group>
    <van-cell-group> 
      <van-field 
        v-model="form.confirmPassword"
        label="确认密码：" 
        placeholder="请再次输入密码"
        clearable
        type="password" 
        name="confirmPassword"
        :rules="comfirmPasswordRules"
      ></van-field> 
    </van-cell-group>
    <van-cell-group>
      <van-button block round type="primary" native-type="submit">注册</van-button>
    </van-cell-group> 
  </van-form>
  <div class="tip">注册成功后的用户可用于登录</div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { getUser, register } from '../api'
import useToken from '../stores/token'
import useUser from '../stores/user'
import { useRouter } from 'vue-router'

const { updateToken} = useToken()
const { updateUser } = useUser()

const form = reactive({
  username: '',
  password: '',
  confirmPassword: ''
})

const router = useRouter()

// 定义验证规则
const usernameRules = ref([
  { required: true, message: '用户名不能为空', trigger: 'onBlur' },
  { pattern: /^\w{3,16}$/, message: '用户名长度为3-16个字符', trigger: 'onBlur' }
])
const passwordRules = ref([
  { required: true, message: '密码不能为空', trigger: 'onBlur' },
  { pattern: /^\w{6,24}$/, message: '密码必须为6-24位英文字母或数字', trigger: 'onBlur' }
])
const comfirmPasswordRules = ref([
  { required: true, message: '密码不能为空', trigger: 'onBlur' },
  { pattern: /^\w{6,24}$/, message: '密码必须为6-24位英文字母或数字', trigger: 'onBlur' },
  { validator: value => {
      if (value !== form.password) {
        return '两次输入的密码不一致'
      }
      return true
    }
  }
])

// 表单提交函数
const submitForm = async () => {
  const data = await register(form)
  if (data) {
    updateToken(data.token)
    const user = await getUser()
    updateUser({
      isLogin: true,
      username: user.username,
      avatar: user.avatar
    })
    router.push({ name: 'user' })
  }
}
const onFailed = errorInfo => {
  console.log('failed', errorInfo)
}
</script>

<style lang="less" scoped>
button {
  position: fixed;
  top: 270px;
}
.tip {
  position: fixed;
  top: 330px;
  text-align: center;
  width: 100%;
  font-size: 14px;
  color: #666;
}
</style>

