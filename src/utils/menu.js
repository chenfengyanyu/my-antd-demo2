module.exports = [
  {
    key: 'account',
    name: '个人中心',
    icon: 'laptop',
  },
  {
    key: 'users',
    name: '客户管理',
    icon: 'user',
  },
  {
    key: 'ui',
    name: '方案列表',
    icon: 'camera-o',
    clickable: false,
    child: [
      {
        key: 'ico',
        name: '水位',
      },
    ],
  },
]
