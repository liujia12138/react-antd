const menu = [
    {
        key: 'manage',  // route时url中的值
        name: '用户管理',  // 在菜单中显示的名称
        icon: 'smile',  // 图标是可选的
        child: [
            {
                key: 'entManage',
                name: '企业用户',
                icon: 'play-circle',   // 二级三级菜单也可以带图标
            },
            {
                key: 'orgManage',
                name: '机构用户',
                icon: 'android',
            }
        ],
    },
]