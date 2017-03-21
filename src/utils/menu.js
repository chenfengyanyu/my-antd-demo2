module.exports = [
  {
    key: 'dashboard',
    name: '控制面板',
    icon: 'laptop',
  },
  {
    key: 'users',
    name: '用户管理',
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
