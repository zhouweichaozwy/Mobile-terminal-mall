<template>
  <div class="home-top">
    <h3>人气推荐</h3>
    <div class="content">
      <van-card
        v-for="item in GoodsList"
        :key="item.id"
        :tag="item.tag"
        :price="item.retail_price"
        :origin-price="item.origin_price"
        :desc="item.goods_brief"
        :title="item.name"
        :thumb="item.list_pic_url"
      >
      </van-card>
    </div>
  </div>
</template>

<script setup>
const GoodsList = [
  {
    retail_price: '299.00',
    name: '蚕丝被 正品桑蚕丝',
    goods_brief: '一级桑蚕丝，轻盈、透气、柔软',
    list_pic_url: '/images/top1.jpg',
    tag: 'TOP1'
  },
  {
    retail_price: '88.00',
    origin_price: '98.00',
    name: '儿童摇摇马',
    goods_brief: '安全、不会侧翻、爸妈放心',
    list_pic_url: '/images/top2.jpg',
    tag: 'TOP2'
  },
  {
    retail_price: '128.00',
    origin_price: '168.00',
    name: '可躺可睡休闲懒人沙发',
    goods_brief: '轻松看书、社交、办公、舒适放松',
    list_pic_url: '/images/top3.jpg',
    tag: 'TOP3'
  },
  {
    retail_price: '199.00',
    origin_price: '205.00',
    name: '儿童积木 拼装玩具',
    goods_brief: '大颗粒 家长更放心 不易吞咽、安全性高',
    list_pic_url: '/images/top4.jpg',
    tag: 'TOP4'
  },
  {
    retail_price: '89.00',
    origin_price: '99.00',
    name: '扭扭车 1——3岁男女宝宝',
    goods_brief: '儿童扭扭车万向轮 防侧翻大人新款摇摆扭扭车',
    list_pic_url: '/images/top5.jpg',
    tag: 'TOP5'
  }
]
</script>

<style lang="less" scoped>
.home-top {
  h3 {
    font-size: 22px;
    line-height: 30px;
    text-align: center;
    margin: 0.5rem 0;
  }
  .content {
    --van-tag-primary-color: #FF8000;
    --van-card-font-size: 16px;
    --van-card-background: #f9f9f9;
    background: var(--van-card-background);
    :deep(.van-card) {
      margin-top: 0;
      .van-card__title {
        padding: 10px 0 5px;
      }
      .van-card__price-currency {
        font-size: var(--van-card-font-size);
      }
    }
  }
  &::after {
    content: '';
    display: block;
    height: 3rem;
  }
}
</style>