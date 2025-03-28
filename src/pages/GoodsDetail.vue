<template>
  <div class="goods" v-if="!isNotFound">
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="item in album" :key="item.id">
        <img :src="item.picture" height="414">
      </van-swipe-item>
    </van-swipe>
    <van-cell-group>
      <van-cell>
        <template #title>
          <span class="goods-top">新品</span>
          <div class="goods-price">
            <span class="small">￥</span>
            {{ goods.price }}
            <span class="spec">{{ goods.spec }}</span>
          </div>
          <div class="goods-title">
            <span class="small"> {{ goods.name }}</span>
          </div> 
        </template>
      </van-cell>
      <van-cell class="goods-express">
        <template #title>
          <van-col span="10">运费：10</van-col>
          <van-col span="14">剩余：{{ goods.stock }}</van-col>
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group class="goods-cell-group">
      <van-cell>
        <template #title>
          <span class="van-cell-text">发货　陕西宝鸡</span>
        </template>
      </van-cell>
      <van-cell>
        <template #title>
          <span class="van-cell-text">保障　坏单包赔·假一赔四·极速退款</span>
        </template>
      </van-cell>
      <van-cell>
        <template #title>
          <span class="van-cell-text">参数　品牌：枝纯　价格：100-200</span>
        </template>
      </van-cell>
    </van-cell-group>
    <div class="goods-cell-title">
      —— 宝贝详情 ——
    </div>
    <div class="goods-description" v-html="goods.description"></div>
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" @click="sorry" text="客服" />
      <van-action-bar-icon icon="cart-o" :badge="cartCount()" @click="onClickCart" text="购物车" />
      <van-action-bar-button type="warning" @click="addCart" text="加入购物车" />
      <van-action-bar-button type="danger" @click="sorry" text="立即购买" />
    </van-action-bar>
  </div>
  <div class="goods-not-found" v-else>商品不存在</div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { getGoodsAlbum, getGoodsDetail } from '../api'
import useCart from '../stores/cart'

const { cartCount, addToCart } = useCart()

const props = defineProps({
  id: String
})

const goods = reactive({})
const album = ref([])
const isNotFound = ref(false)

onMounted(() => {
  loadGoodsDetail()
})

// 加载商品详情
const loadGoodsDetail = async () => {
  const data1 = await getGoodsDetail({ id: props.id })
  if (!data1.id) {
    isNotFound.value = true
    return
  }
  const data2 = await getGoodsAlbum({ goods_id: props.id })
  if (data2.length === 0 && data1.picture !== '') {
    data2.push({ picture: data1.picture })
  }
  Object.assign(goods, data1)
  album.value = data2
}


import { showToast } from 'vant'
import { useRouter } from 'vue-router'

const router = useRouter()

const sorry = () => {
  showToast('暂无后续逻辑~')
}

const onClickCart = () => {
  router.push({ name: 'cart' })
}

const addCart = () => {
  addToCart({ id: props.id, num: 1, checked: true })
  showToast({
    message: '添加成功'
  })
}
</script>

<style lang="less" scoped>
.goods {
  text-align: center;
  padding-bottom: 50px;
  .goods-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  .goods-top {
    display: block;
    width: 30px;
    padding: 0 5px;
    border-radius: 10px;
    color: #fff;
    background-color: #f44;
  }
  .goods-title {
    text-align: left;
    .small {
      font-size: 14px;
    }
  }
  .goods-price {
    color: #f44;
    text-align: left;
    font-size: 20px;
    .small {
      font-size: 12px;
    }
    .spec {
      font-size: 12px;
      color: #999;
    }
  }
  .goods-cell-title {
    padding: 20px 0;
  }
  .goods-description {
    width: 95%;
    margin: 0 auto;
    padding-bottom: 20px;
    font-size: 14px;
    :deep(img) {
      max-width: 100%;
      height: auto;
      display: block;
    }
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
    :deep(.van-col) {
      float: left;
    }
    :deep(.van-col--14){
      width: 58%;
    }
  }
 .goods-cell-group {
    :deep(.van-cell__title span){
      float: left;
    }
  }
  :deep(.van-cell:after) {
    border: none;
  }
}
.goods-not-found {
  padding-top: 48px;
  text-align: center;
  font-size: 28px;
}
</style>
