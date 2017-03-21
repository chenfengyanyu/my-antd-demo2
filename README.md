# Ant design  demo

## 特性

## To do list

-   [x] 登录页面
-   [x] dashbord页面
    -   [x] 数字卡片
    -   [x] 实时天气卡片
    -   [x] 图表
-   [x] 用户列表页面
    -   [x] 增删改查
    -   [x] 交互动效
-   [x] 扩展UI组件
-   [x] Ico
-   [x] Search
-   [x] dropOption
-   [x] 基于Modal封装的layer
-   [x] 加入dva-loading
-   [x] 规范代码: EsLint; 自用[开发配置](assets/standard.md)
-   [ ] 数据可视化页面
-   [ ] 模拟消息收发
-   [ ] 升级dva-cli

## 开发及构建

### 目录结构

```bash
├── /mock/           # 数据mock的接口文件
├── /dist/           # 项目输出目录
├── /src/            # 项目源码目录
│ ├── /components/   # 项目组件
│ ├── /routes/       # 路由组件
│ ├── /models/       # 数据模型
│ ├── /services/     # 数据接口
│ ├── /utils/        # 工具函数
│ ├── route.js       # 路由配置
│ ├── index.js       # 入口文件
│ └── index.html     
├── package.json     # 项目信息
└── proxy.config.js  # 数据mock配置
```

### 快速开始

克隆项目文件:


```
git clone https://github.com/zuiidea/antd-admin.git
```

进入目录安装依赖:

    npm i 或者 yarn install

开发：

```bash
npm run dev    # 使用mock拦截请求，数据存储在localStroge里

打开 http://localhost:8000
```

构建：

```bash
npm run build

将会生成dist目录
```

代码检测：

```bash
npm run lint
```
