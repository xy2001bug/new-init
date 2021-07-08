export default [
    {
        path: '/infomation/list',
        name: 'infomation-list',
        component (resolve) {
            require(['@/views/pages/infomation/infoList'], resolve)
        },
        mete: {
            title: '产业资讯'
        }
    },
    {
        path: '/infomation/detail',
        name: 'infomation-detail',
        component (resolve) {
            require(['@/views/pages/infomation/infoDetail'], resolve)
        },
        mete: {
            title: '资讯详情'
        }
    }
]
