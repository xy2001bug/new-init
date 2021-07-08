export default [
    {
        path: '/company/companyList',
        name: 'company-list',
        component (resolve) {
            require(['@/views/pages/company/companyList'], resolve)
        },
        mete: {
            title: '专利产业对接'
        }
    },
    {
        path: '/company/requirement',
        name: 'company-requirement',
        component (resolve) {
            require(['@/views/pages/company/requirement'], resolve)
        },
        mete: {
            title: '入驻单位说明'
        }
    }
]
