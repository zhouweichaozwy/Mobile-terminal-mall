<template>
  <div class="cart">
    <div class="cart-container">
      <van-empty v-show="goodsList.length == 0" description="购物车目前还没有商品" :image="cartEmptyImage">
        <router-link :to="{ name: 'category' }">
          <van-button round type="danger" class="bottom-button">去购物</van-button>
        </router-link> 
      </van-empty>
      <!-- 购物车列表 -->
      <div v-for="item in goodsList" :key="item.id" class="list">
        <van-swipe-cell>
          <!-- 复选框 -->
          <div class="checkbox">
            <van-checkbox :name="item" v-model="item.cart.checked" @change="onCheck" checked-color="#f11a27"></van-checkbox>
          </div>
          <!-- 商品图片 -->
          <div class="image">
            <router-link :to="{ name: 'goodsDetail', params: { id: item.id } }">
              <van-image width="50" height="50" :src="item.picture" />
            </router-link>
          </div>
          <!-- 商品信息 -->
          <div class="goods-info">
            <div>{{ item.name }}</div>
            <div class="bottom">
              <div class="price"><span>￥</span>{{ item.price }}</div>
              <van-stepper  v-model="item.cart.num" theme="round" button-size="22" disable-input />
            </div>
          </div>  
          <!-- 左滑删除 -->
          <template #right>
            <van-button aquare icon="delete" type="danger" class="delete-button" @click="onDelete(item)" />
          </template>
        </van-swipe-cell>
      </div>
    </div>
    <!-- 结算 -->
    <van-submit-bar v-show="goodsList.length" :price="total * 100" button-text="去结算" button-type="primary" @submit="onSubmit" class="settlement">
      <van-checkbox v-model="allChecked" checked-color="#f11a27" @click="onCheckAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { getCartList } from '../api'
import useCart from '../stores/cart'
import { showToast } from 'vant'
import cartEmptyImage from '../assets/images/cart_empty.png'

const { cart, removeCart } = useCart()

const goodsList = ref([])
const allChecked = ref(false)

onMounted(async () => {
  await loadCart()
  onCheck()
})

// 加载购物车数据
const loadCart = async () => {
  const ids = cart.map(item => item.id)
  goodsList.value = await getCartList({ ids: ids.join(',') })
  goodsList.value.forEach(goods => {
    goods.cart = cart.find(item => goods.id == item.id)
  })
}

// 总金额
const total = computed(() => {
  let sum = 0
  goodsList.value.forEach(item => {
    if (item.cart.checked) {
      sum += item.price * item.cart.num
    }
  })
  return sum
})

// 去结算
const onSubmit = () => {
  showToast('暂无后续逻辑~')
}

// 全选
const onCheckAll = () => {
  goodsList.value.forEach(el => {
    el.cart.checked = allChecked.value
  })
}

// 商品都被选中时，全选按钮高亮
const onCheck = () => {
  allChecked.value = goodsList.value.every(el => el.cart.checked)
}

// 删除商品
const onDelete = item => {
  const id = item.id
  goodsList.value.forEach((item, index) => {
    if (item.id == id) {
      goodsList.value.splice(index, 1)
    }
  })
  removeCart(id)
}
</script>
 
<style lang="less" scoped>
.cart {
  margin: 0.3rem;
  padding: .05rem 0 3rem 0;
  .cart-container {
    margin-top: 1rem;
    .list {
      position: relative;
      height: 5rem;
      border-radius: 10px;
      box-shadow: 0px 0px 5px #ccc;
      margin-bottom: 1rem;
      .checkbox {
        position: absolute;
        top: 1.7rem;
        left: .2rem;
      }
      .image {
        position: absolute;
        top: .7rem;
        left: 2rem;
      }
      .goods-info {
        height: 5rem;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding: 0 1rem 0 6rem;
        .bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .price {
            color: #c82519;
            font-size: .45rem;
          }
        }
      }
      .delete-button {
        width: 2rem;
        height: 100%;
      }
    }
    .bottom-button {
      width: 7rem;
      height: 2rem;
    }
  }
  .settlement {
    margin-bottom: -0.1rem;
  }
}
:deep(.van-submit-bar) {
  bottom: 3.5rem;
}
:deep(.van-swipe-cell) {
  width: 100%;
}
</style>