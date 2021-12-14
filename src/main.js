// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
//引入router
import VueRouter from 'vue-router'
import router from './router'

//使用router插件
Vue.use(VueRouter)

//关闭生产提示
Vue.config.productionTip = false


//创建vue对象
new Vue({
    el: '#app',
    render: h => h(App),
    router
})
