<template>
  <van-nav-bar
    :title="$route.meta.title"
    v-show="$route.meta.isShowNav"
    @click-left="onClickLeft"
    :left-arrow="$route.meta.isShowBack"
    fixed
    placeholder
    style="height: 46px"
  />
  <router-view></router-view>
  <tab-bar v-if="isShowTabbar"></tab-bar>
</template>

<script setup>
import TabBar from './components/TabBar.vue'
import { useRoute } from 'vue-router'
import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const route = useRoute()
const isShowTabbar = ref(true)

const router = useRouter()
const onClickLeft = () => {
  if (history.length > 1) {
    router.back()
  } else {
    router.push({ name: 'home' })
  }
}

// 监听路由中的isTab是否为true，如果为true，展示底部TabBar
watch(
  () => route.meta,
  val => {
    isShowTabbar.value = val.isTab
  }
)

// 刷新后检查登录状态
import { getUser } from './api'
import useUser from './stores/user'
const { user, updateUser } = useUser()

onMounted(() => {
  if (user.isLogin) {
    loadUser()
  }
})

const loadUser = async () => {
  const data = await getUser()
  updateUser({
    isLogin: true,
    username: data.username,
    avatar: data.avatar
  })
}
</script>

<style>
#app {
  color: #2c3e50;
  line-height: 24px;
  --van-nav-bar-background: #ff8000;
  --van-nav-bar-title-text-color: #fff;
  --van-nav-bar-icon-color: #fff;
}
</style>
