# Ant design  demo

## 计划清单
-   [x] 结构调整，按照功能块划分，局部按照业务逻辑划分结构
-   [x] 去除 mock 数据
-   [x] 使用fetch
-   [x] 使用roadhog 替换 doar + atool-build
-   [x] 样式优化
-   [x] 登录
-   [x] 路由
    -   [x] 配置
-   [x] 扩展 icon
-   [  ] 中英文版本
-   [  ] 使用高德地图
-   [  ] 使用谷歌地图
-   [  ] 引入g2或者echarts

### 目录树
```bash
├── README.md
├── assets
│   └── standard.md
├── node_modules
├── package.json
├── proxy.config.js
├── src
│   ├── components
│   ├── index.html
│   ├── index.js
│   ├── models
│   ├── router.js
│   ├── routes
│   ├── services
│   ├── tests
│   ├── theme.js
│   └── utils
└── webpack.config.js
```

### 快速开始
克隆项目文件:
```bash
https://github.com/chenfengyanyu/my-antd-demo2.git
```

进入目录安装依赖:
```bash
npm i
```

启动项目，打开 http://localhost:8989预览：
```bash
npm start
```

构建生成dist目录：
```bash
npm run build
```

语法测试：
```bash
npm run test
```

参考资源：
[ant design](https://ant.design/components/icon-cn/)
[antd-admin](https://github.com/zuiidea/antd-admin/blob/master/assets/standard.md)
