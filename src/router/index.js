// 专门用于创建整个应用的路由
import VueRouter from 'vue-router'

//创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'about',
            path: '/about',
            component: () => import("../pages/About")
        },
        {
            name: 'home',
            path: '/home',
            component: () => import("../pages/Home"),
            meta: { isAuth: true },
            // 路由独享守卫
            beforeEnter: (to, from, next) => {
                if (to.meta.isAuth) {
                    next()
                }
            },
            children: [
                {
                    name: 'news',
                    path: 'news',
                    component: () => import("../pages/News"),
                    //meta里面可以配置自己的一些属性
                    meta: { isAuth: true },
                },
                {
                    name: 'message',
                    path: 'message',
                    component: () => import("../pages/Message"),
                    meta: { isAuth: true },
                    children: [
                        {
                            // name属性简化路由跳转
                            name: 'detail',
                            // path: 'detail',
                            // params传参 result ful 风格
                            path: 'detail/:id/:title',
                            component: () => import("../pages/Detail"),

                            // props可用将params的参数以prop传给组件
                            // props: true

                            //props 函数式写法, 返回值为对象
                            props($route) {
                                return {
                                    id: $route.params.id,
                                    title: $route.params.title
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

/* // 全局前置路由守卫————初始化的时候调用，路由切换前调用
// 可以用在需要权限验证路由成功才执行的功能
router.beforeEach((to, from, next) => {
    // console.log(to, from);
    if (to.name == "home" || to.name == "about") {
        next()
    } else {
        if (to.meta.isAuth) {
            next()
        }
    }

}) */

// 全局后置路由守卫————初始化的时候调用，路由切换后调用
router.afterEach((to, from) => {
    console.log(to, from
    );
})

export default router
