<template>
  <div class="home-swiper">
    <van-swipe :autoplay="3000" lazy-render indicator-color="#FF8000">
      <van-swipe-item v-for="item in banner" :key="item">
        <img :src="item">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script setup>

const banner = [
  '/images/banner1.jpg',
  '/images/banner2.jpg',
]
</script>
<style lang="less" scoped>
.home-swiper {
  width: 100%;
  img {
    width: 100%;
  }
}
</style>
