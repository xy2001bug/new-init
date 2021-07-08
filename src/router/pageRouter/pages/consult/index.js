export default [
    {
        path: '/consult/index',
        name: 'consult',
        component (resolve) {
            require(['@/views/pages/consult/index'], resolve)
        },
        mete: {
            title: '咨询服务'
        }
    }
]
