<template>
  <div class="menu">
    <div class="menu-left">
      <ul>
        <li class="menu-item" v-for="(menu, index) in menus" :key="index" :class="{ current: index === currentIndex }" @click="clickList(index)" ref="menuList">
          <p class="text">{{ menu.name }}</p>
        </li>
      </ul>
    </div>
      <div class="menu-right" ref="itemList">
      <!-- 显示二级分类 -->
      <ul>
        <li class="cate" v-for="(menu, index1) in menus" :key="index1">
          <h4 class="cate-title">{{ menu.name }}</h4>
          <ul class="cate-item">
            <li v-for="(item, index2) in menu.children" :key="index2">
              <router-link class="cate-item-wrapper" :to="{name: 'goodslist', params: { category_id: item.id } }">
              <!-- <router-link class="cate-item-wrapper" to=""> -->
                <div class="cate-item-img">
                  <img :src="item.picture" alt="">
                </div>
                <span>{{ item.name }}</span>
              </router-link>
            </li>
          </ul>
        </li>
        <li class="cate-bottom"></li>
      </ul>
    </div>
  </div>
</template>

<script setup>

import { onMounted, watch, nextTick, ref, computed } from 'vue'
import { getCategoryList } from '../api'

import BScroll from '@better-scroll/core'

const menus = ref([])
const itemList = ref()
const rightLiTops = ref([])
const menuList = ref()
const scrollY = ref(0)

let leftBScroll = null
let rightBScroll = null

onMounted(() => {
  loadCategoryList()
  RightHeightFix()
})

// 监听
watch(menus, () => {
  nextTick(() => {
    initBScroll()
    initRightHeight()
  })
})

// 获取分类数据
const loadCategoryList = async () => {
  let data = await getCategoryList()
  // 将一维数组数据转换为树形结构
  const treeData = convertToTree(data)
  // 将转换后的数据赋值给menus
  menus.value = treeData
}

// 将一维数组转换成树形结构的方法
const convertToTree = data => {
  const treeData = []
  const map = {}
  // 遍历一维数组数据，建立节点映射表
  for (const item of data) {
    map[item.id] = { ...item, children: [] }
  }
  // 遍历映射表，将节点添加到父节点的children中
  for (const item of data) {
    const node = map[item.id]
    if (item.pid === 0) {
      treeData.push(node)
    } else {
      const parent = map[item.pid]
      parent.children.push(node)
    }
  }
  return treeData
}

// 单击左侧菜单项
const clickList = index => {
  scrollY.value = rightLiTops.value[index]
  rightBScroll.scrollTo(0, -scrollY.value)
}

// 初始化BScroll
const initBScroll = () => {
  // 初始化左菜单
  leftBScroll = new BScroll('.menu-left', {
    click: true,
    mouseWheel: true
  })
  // 初始化右菜单
  rightBScroll = new BScroll('.menu-right', {
    click: true,
    mouseWheel: true,
    probeType: 3 // 实时派发scroll事件
  })
  rightBScroll.on('scroll', pos => {
    scrollY.value = Math.abs(pos.y)
  })
}

// 初始化右边菜单的高度
const initRightHeight = () => {
  const itemArray = []
  let top = 0
  itemArray.push(top)
  const allList = itemList.value.getElementsByClassName('cate')
  Array.prototype.slice.call(allList).forEach(li => {
    top += li.clientHeight
    itemArray.push(top)
  })
  rightLiTops.value = itemArray
}

const RightHeightFix = () => {
  let bottom = itemList.value.getElementsByClassName('cate-bottom')[0]
  bottom.style.height = itemList.value.clientHeight / 1.2 + 'px'
}

// 右菜单滚动时，左菜单联动
const initLeftScroll = index => {
  const menu = menuList.value
  let el = menu[index]
  leftBScroll.scrollToElement(el, 300, 0, -100)
}

// 监听数据的到达，并在回调函数中更新
const currentIndex = computed(() => {
  return rightLiTops.value.findIndex((top, index) => {
    if (index === rightLiTops.value.length - 2) {
      return true
    }
    if (scrollY.value >= top && scrollY.value < rightLiTops.value[index + 1]) {
      initLeftScroll(index)
      return true
    }
  })
})
</script>

<style lang="less" scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.menu {
  display: flex;
  position: absolute;
  text-align: center;
  top: 46px;
  bottom: 50px;
  width: 100%;
  overflow: hidden;
  .menu-left {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
    line-height: 54px;
    .menu-item {
      height: 54px;
      width: 100%;
      border-bottom: 1px solid #e1e1e1;
      .text {
        width: 100%;
        margin: 0;
      }
    }
    .current {
      width: 100%;
      background: #fff;
      .text {
        color: red;
      }
    }
  }
  .menu-right {
    flex: 1;
    background: #fff;
    .cate {
      height: 100%;
      .cate-title {
        margin: 0;
        text-align: left;
        font-size: 14px;
        color: #333;
        font-weight: bold;
        padding: 10px;
      }
      .cate-item {
        padding: 7px 10px 10px;
        display: flex;
        overflow: hidden;
        flex-flow: row wrap;
        li {
          width: 33.3%;
          .cate-item-wrapper {
            .cate-item-img {
              width: 100%;
              img {
                width: 70px;
                height: 70px;
              }
            }
            span {
              display: inline-block;
              font-size: 14px;
              color: #333;
            }
          }
        }
      }
    }
  }
}
</style>
