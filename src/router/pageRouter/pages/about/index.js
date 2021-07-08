export default [
    {
        path: '/about',
        name: 'about',
        component (resolve) {
            require(['@/views/pages/about/index'], resolve)
        },
        mete: {
            title: '关于我们'
        }
    }
]
