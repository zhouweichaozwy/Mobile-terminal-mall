<template>
  <div class="home-grid">
    <van-grid :column-num="5" square :gutter="5">
      <van-grid-item v-for="list in menulist" :key="list">
       <van-image :src="list.url" />
        <span>{{ list.text }}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script setup>
import menu1 from '../assets/images/menu1.png'
import menu2 from '../assets/images/menu2.png'
import menu3 from '../assets/images/menu3.png'
import menu4 from '../assets/images/menu4.png'
import menu5 from '../assets/images/menu5.png'
import menu6 from '../assets/images/menu6.png'
import menu7 from '../assets/images/menu7.png'
import menu8 from '../assets/images/menu8.png'
import menu9 from '../assets/images/menu9.png'
import menu10 from '../assets/images/menu10.png'

const menulist = [
  { text: '今日爆款', url: menu1 },
  { text: '好物分享', url: menu2 },
  { text: '推荐购买', url: menu3 },
  { text: '购物心得', url: menu4 },
  { text: '直播专区', url: menu5 },
  { text: '签到中心', url: menu6 },
  { text: '值得购买', url: menu7 },
  { text: '每日优惠', url: menu8 },
  { text: '充值中心', url: menu9 },
  { text: '我的客服', url: menu10 }
]
</script>

<style lang="less" scoped> 
.home-grid {
  .van-image {
    width: 55%;
  }
  span {
    font-size: 12px;
  }
}
</style>