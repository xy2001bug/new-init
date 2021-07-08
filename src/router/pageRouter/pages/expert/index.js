export default [
    {
        path: '/expert/list',
        name: 'expert-list',
        component (resolve) {
            require(['@/views/pages/expert/expertList'], resolve)
        },
        mete: {
            title: '专家列表'
        }
    },
    {
        path: '/expert/detail',
        name: 'expert-detail',
        component (resolve) {
            require(['@/views/pages/expert/expertDetail'], resolve)
        },
        mete: {
            title: '专家详情'
        }
    }
]
