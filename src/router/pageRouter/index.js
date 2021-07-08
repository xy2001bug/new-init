import home from './pages/home/index'
import pt from './pages/pt/index'
import expert from './pages/expert/index'
import development from './pages/development/index'
import consult from './pages/consult/index'
import infomation from './pages/infomation/index'
import propagate from './pages/propagate/index'
import company from './pages/company/index'
import about from './pages/about/index'

export default [
    {
        path: '/',
        // name: 'index',
        component: function (resolve) {
            require(['@/views/layout'], resolve)
        },
        children: [
            ...home,
            ...pt,
            ...expert,
            ...development,
            ...consult,
            ...infomation,
            ...propagate,
            ...company,
            ...about
        ]
    }
]
