import Vue from 'vue'
import VueRouter from 'vue-router'

// 注册路由插件
Vue.use(VueRouter)
// 创建路由对象
const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'',
            redirect:'/home'
        },
        {
            path:'/home',
            component: () => import('../views/home/Home')
        },
        {
            path:'/category',
            component: () => import('../views/category/Category')
        },
        {
            path:'/shopcart',
            component: () => import('../views/shopcart/Shopcart')
        },
        {
            path:'/profile',
            component: () => import('../views/profile/Profile')
        },
        {
            path:'/detail/:iid',
            component: () => import('../views/detail/Detail')
        }



    ]
    
})

// 导出路由对象
export default router