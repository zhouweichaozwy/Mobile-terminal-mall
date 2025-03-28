<template>
  <van-tabbar route fixed placeholder border>
    <van-tabbar-item replace :to="{ name: 'home' }" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace :to="{ name: 'category' }" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item replace :to="{ name: 'message' }" icon="chat-o" badge="4">消息</van-tabbar-item>
    <van-tabbar-item replace :to="{ name: 'cart' }" icon="shopping-cart-o" :badge="cartCount()">购物车</van-tabbar-item>
    <van-tabbar-item replace :to="{ name: 'user' }" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import useCart from '../stores/cart'

const { cartCount } = useCart()
</script>

<style scoped>
.van-tabbar-item {
  --van-tabbar-item-active-color: #FF8000;
}
</style>
