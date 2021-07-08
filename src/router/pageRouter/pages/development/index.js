export default [
    {
        path: '/development/technology',
        name: 'technology',
        component (resolve) {
            require(['@/views/pages/development/technology'], resolve)
        },
        mete: {
            title: '找技术'
        }
    },
    {
        path: '/development/technologyDetail',
        name: 'technologyDetail',
        component (resolve) {
            require(['@/views/pages/development/technologyDetail'], resolve)
        },
        mete: {
            title: '技术详情'
        }
    },
    {
        path: '/development/need',
        name: 'need',
        component (resolve) {
            require(['@/views/pages/development/need'], resolve)
        },
        mete: {
            title: '提需求'
        }
    }
]
