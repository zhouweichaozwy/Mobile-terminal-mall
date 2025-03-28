<template>
  <!-- 已登录 -->
  <van-row v-if="user.isLogin" class="user-info">
    <van-image v-if="user.avatar" round width="100" height="100" src="{{ user.avatar }}" />
    <van-image v-else round width="100" height="100" :src="avatar_default" />
    <span class="user-info-name">{{ user.username }}</span>
    <van-button plain type="danger" size="mini" @click="onLogout">退出</van-button>
  </van-row>
  <!-- 未登录 -->
  <van-row v-else class="user-info">
      <van-image round width="100" height="100" :src="avatar_default" />
      <router-link :to="{ name: 'login' }">
        <span class="user-info-name">登录&nbsp;&nbsp;|</span>
      </router-link>
      <router-link :to="{ name: 'register' }">
        <span class="user-info-name">注册</span>
      </router-link>
  </van-row>
  <van-row class="user-links">
    <van-col span="6">
      <van-icon name="pending-payment" />
      待付款
    </van-col>
    <van-col span="6">
      <van-icon name="records" :badge="user.isLogin ? '7' : ''" />
      待收货
    </van-col>
    <van-col span="6">
      <van-icon name="tosend" :badge="user.isLogin ? '40' : ''" />
      待评价
    </van-col>
    <van-col span="6">
      <van-icon name="logistics" :badge="user.isLogin ? '1' : ''" />
      退换/售后
    </van-col>
  </van-row>
  <van-cell-group class="user-group my-title">
    <van-cell icon="records" title="全部订单" is-link />
  </van-cell-group>
  <van-cell-group  class="my-title">
    <van-cell icon="points" title="我的积分" is-link />
    <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
    <van-cell icon="gift-o" title="我的红包" is-link />
  </van-cell-group>
</template>

<script setup>
import avatar_default from '../assets/images/avatar_default.png'
import router from '../router/index'
import useToken from '../stores/token'
import useUser from '../stores/user'
import { showToast } from 'vant'

const { removeToken } = useToken()
const { user, removeUser } = useUser()

// 退出登录
const onLogout = async () => {
  removeToken()
  removeUser()
  router.push({ name: 'user' })
  showToast({
    message: '退出成功',
    type: 'success'
  })
}
</script>

<style lang="less" scoped>
.user-info {
  padding: 15px;
  background: url(../assets/images/user_head_bg.png) no-repeat;
  background-size: 100%;
}
.user-info button {
  margin: 40px 0 0 10px;
}
.user-info-name {
  display: inline-block;
  color: #fff;
  padding: 40px 0 0 10px;
  font-size: 20px;
}
:deep(.van-badge--top-right) {
  top: 4px;
  right: 35px;
  transform: translate(50%, -50%);
}
.user {
  &-group {
    margin-bottom: 15px;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>
