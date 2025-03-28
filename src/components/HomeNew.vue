<template>
  <div class="home-new">
    <div class="home-new-title">
      <h3>每周上新</h3>
    </div>
    <ul>
      <li v-for="item in newList" :key="item.id">
        <img :src="item.list_pic_url" alt="" />
        <p>{{ item.name }}</p>
        <p><span>￥</span>{{ item.retail_price }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import new1 from '/images/new1.jpg'
import new2 from '/images/new2.jpg'
import new3 from '/images/new3.jpg'
import new4 from '/images/new4.jpg'

const newList = [
  { name: '懒人小沙发', list_pic_url: new1, retail_price: '128.00' },
  { name: '减压弹力球', list_pic_url: new2, retail_price: '89.00' },
  { name: '简约一字夹发夹', list_pic_url: new3, retail_price: '12.8' },
  { name: '毛线小兔子耳朵发夹', list_pic_url: new4, retail_price: '9.9' }
]
</script>

<style lang="less" scoped>
.home-new {
  .home-new-title {
    text-align: center;
    font-size: 16px;
    margin-top: 1.6rem;
    height: 50px;
    h3 {
      width: 50%;
      border-top: 2px solid #ccc;
      padding-top: 8px;
      margin: 0 auto;
    }
  }
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 1rem 0 0;
    background-color: #f9f9f9;
    li {
      width: 49.5%;
      img {
        width: 100%;
      }
      p {
        text-align: center;
        margin: 0.5rem 0;
      }
      span {
        color: #FF8000;
        font-size: 12px;
      }
    }
  }
}
</style>