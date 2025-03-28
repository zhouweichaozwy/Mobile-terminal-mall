import { defineStore } from 'pinia'
import { ref } from 'vue'

const useCart = defineStore('cart', () => {
  const cart = ref([])
  const addToCart = goods => {
    const item = cart.value.find(item => goods.id == item.id)
    if (item) {
      item.num += goods.num
    } else {
      cart.value.push(goods)
    }
  }
  const removeCart = id => {
    cart.value.forEach((item, index) => {
      if (item.id == id) {
        cart.value.splice(index, 1)
      }
    })
  }
  const cartCount = () => {
    let sum = 0
    cart.value.forEach(item => {
      sum += item.num
    })
    return sum || undefined
  }
  return { cart, addToCart, removeCart, cartCount }
}, {
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'cart',
        storage: localStorage
      }
    ]
  }
})
export default useCart