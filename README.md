# Ant design  demo

## 计划清单
-   [x] 结构调整（[参考](https://github.com/zuiidea/antd-admin/blob/master/assets/standard.md)）
-   [x] 去除mock数据
-   [x] 使用fetch
-   [x] 登录
-   [x] 路由
    -   [x] 配置
-   [x] 扩展 icon
-   [  ] 中英文版本
-   [  ] 引入高德地图
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
