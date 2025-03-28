<template>
  <van-cell-group v-for="item in lists" :key="item">
    <van-cell center :icon="item.img" :title="item.title" :value="item.value" :label="item.label" />
  </van-cell-group>
</template>

<script setup>
const lists = [
  {
    img: '/images/avatar1.jpg',
    title: '食品旗舰店',
    value: '星期一',
    label: "您有一条店铺消息"
  },
  {
    img: '/images/avatar2.jpg',
    title: '水果旗舰店',
    value: '星期二',
    label: "亲爱的果粉："
  },
  {
    img: '/images/avatar3.png',
    title: '订阅号消息',
    value: '星期日',
    label: "水果旗舰店：【新到水果新品————粑粑柑、砂糖橘】"
  },
  {
    img: '/images/avatar4.png',
    title: '消息号内容',
    value: '星期一',
    label: "食品旗舰店：大量新品到货，速来选购"
  }
]
</script>

<style lang="less" scoped>
:deep(.van-cell){
  .van-cell__left-icon {
    width: 40px;
    height: 40px;
    .van-icon__image {
      width: 100%;
      height: 100%;
    }
  }
  .van-cell__title {
    .van-cell__label {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 165px;
    }
  } 
}
</style>