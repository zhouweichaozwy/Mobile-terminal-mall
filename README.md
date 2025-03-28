# 移动端商城（Mobile-terminal-mall）
该项目是基于 Vue3 技术栈开发的轻量级移动端电商平台，涵盖商品展示、导航交互、购物车等核心模块。项目采用模块化开发模式，集成 Pinia 状态管理、Vue Router 路由守卫、Vant 组件库，并实现响应式布局及移动端适配。完成首页搜索、轮播图、功能按钮区、商品展示区、每周上新等模块开发，通过路由元信息动态控制导航栏显示逻辑，提升用户体验。
## ⚙️ 项目技术栈
- 前端框架： Vue3
- 路由管理：Vue Router4
- 状态管理： Pinia 
- UI组件库：Element Plus 
- HTTP请求： Axios    
- CSS预处理器： Sass
-构建工具：vite
## 🚀 安装与运行
### 📋 环境要求
- Node.js (推荐v14.0.0以上)
- npm 或 yarn
### 📥 安装步骤
#### 克隆项目
```
git clone https://github.com/zhouweichaozwy/Mobile-terminal-mall.git
```
#### 进入后端文件夹目录

```
cd shop-backend
```

#### 后端安装依赖

```
npm install      
```

#### 启动后端服务

```
npm start
```

#### 进入前端文件夹目录
```
cd Mobile-terminal-mall
```

#### 安装依赖：

```
yarn
```

#### 启动服务

```
yarn dev
```
### 📦 构建生产版本
```
yarn build
 或
npm run build
```
## ✨ 项目功能
### 🔍 主要功能
- **首页展示**：轮播图、商品分类导航、推荐商品展示
- **商品分类**：多级商品分类浏览
- **商品搜索**：支持关键词搜索商品
- **商品详情**：商品图片轮播、价格展示、商品描述、用户评价
- **购物车**：添加/删除商品、修改商品数量、商品选择/取消、结算功能
- **用户中心**：用户信息管理
### 🌟 特色功能
- 响应式设计，适配各种移动设备
- 商品图片懒加载，提升页面加载性能
- 本地存储用户信息，提升用户体验
## 📁 项目结构
```
├── public/                          // 公共资源目录
├── src/                             // 源代码目录
│   ├── api/                         // API 接口相关
│   ├── assets/images/               // 静态资源（如图片）
│   ├── components/                  // 公共组件
│   ├── pages/                       // 页面组件
│   ├── router/                      // 路由配置
│   ├── stores/                      // 状态管理（Pinia/Vuex）
│   ├── utils/                       // 工具函数目录
│   │    └── request.js              // 封装的 Axios 请求
│   ├── App.vue                      // 根组件
│   ├── config.js                    // 项目配置文件
│   └── main.js                      // 入口文件
├── .gitignore                       // Git 忽略文件
├── index.html                       // 主 HTML 文件
├── package-lock.json                // 锁定依赖文件（npm）
├── package.json                     // 项目配置文件
├── README.md                        // 项目说明文档
├── vite.config.js                   // Vite 配置文件
├── yarn                             // Yarn 执行文件
└── yarn.lock                        // 锁定依赖文件（yarn）
```
## 项目演示



#### 首页：

![首页](https://cdn.jsdelivr.net/gh/zhouweichaozwy/Mobile-terminal-mall@main/README.assets/image-20250328162958709.png)

#### 分类页

![分类页](https://cdn.jsdelivr.net/gh/zhouweichaozwy/Mobile-terminal-mall@main/README.assets/image-20250328163542566.png)

#### 消息页

![消息页](https://cdn.jsdelivr.net/gh/zhouweichaozwy/Mobile-terminal-mall@main/README.assets/image-20250328163614055.png)

#### 购物车页

![购物车页](https://cdn.jsdelivr.net/gh/zhouweichaozwy/Mobile-terminal-mall@main/README.assets/image-20250328163709927.png)

#### 个人中心页

![个人中心页](https://cdn.jsdelivr.net/gh/zhouweichaozwy/Mobile-terminal-mall@main/README.assets/image-20250328163746424.png)

### 注册页

![注册页](https://cdn.jsdelivr.net/gh/zhouweichaozwy/Mobile-terminal-mall@main/README.assets/image-20250328163928941.png)

#### 登录页

![登录页](https://cdn.jsdelivr.net/gh/zhouweichaozwy/Mobile-terminal-mall@main/README.assets/image-20250328164033207.png)

#### 商品列表页

![商品列表页](https://cdn.jsdelivr.net/gh/zhouweichaozwy/Mobile-terminal-mall@main/README.assets/image-20250328164126174.png)

#### 商品详情页

![商品详情页](https://cdn.jsdelivr.net/gh/zhouweichaozwy/Mobile-terminal-mall@main/README.assets/image-20250328164211120.png)

#### 已登录页

![已登录页](https://cdn.jsdelivr.net/gh/zhouweichaozwy/Mobile-terminal-mall@main/README.assets/image-20250328164337109.png)

#### 项目动态演示：

![项目动态演示](https://cdn.jsdelivr.net/gh/zhouweichaozwy/Mobile-terminal-mall@main/README.assets/10.gif)
