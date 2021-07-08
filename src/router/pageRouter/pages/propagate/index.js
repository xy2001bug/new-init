export default [
    {
        path: '/propagate/list',
        name: 'propagate-list',
        component (resolve) {
            require(['@/views/pages/propagate/proList'], resolve)
        },
        mete: {
            title: '宣传培训'
        }
    },
    {
        path: '/propagate/noticeDetail',
        name: 'noticeDetail',
        component (resolve) {
            require(['@/views/pages/propagate/noticeDetail'], resolve)
        },
        mete: {
            title: '宣传通知详情'
        }
    },
    {
        path: '/propagate/trainDetail',
        name: 'trainDetail',
        component (resolve) {
            require(['@/views/pages/propagate/trainDetail'], resolve)
        },
        mete: {
            title: '宣传通讯稿详情'
        }
    }
]
