export const menuList = [
    {
        key: '/manage',  // route时url中的值
        name: '用户管理',  // 在菜单中显示的名称
        icon: 'smile',  // 图标是可选的
        children: [
            {
                key: '/mobil-menu/manage/entManage',
                name: '企业用户',
                icon: 'play-circle',   // 二级三级菜单也可以带图标
            },
            {
                key: '/mobil-menu/manage/orgManage',
                name: '机构用户',
                icon: 'android',
            }
        ],
    },{
        key: '/mobil-menu/group',
        name: '用户组管理',
        icon: 'company'
    },{
        key: '/mobil-menu/companyList',
        name: '企业综合搜索',
        icon: 'company'
    },{
        key: '/mobil-menu/labels',
        name: '标签管理',
        icon: 'company'
    }
]
