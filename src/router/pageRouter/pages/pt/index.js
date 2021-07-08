export default [
    {
        path: '/pt/list',
        name: 'pt-list',
        component (resolve) {
            require(['@/views/pages/pt/ptList'], resolve)
        },
        mete: {
            title: '专列列表'
        }
    },
    {
        path: '/pt/detail',
        name: 'pt-detail',
        component (resolve) {
            require(['@/views/pages/pt/ptDetail'], resolve)
        },
        mete: {
            title: '专列详情'
        }
    }
]
