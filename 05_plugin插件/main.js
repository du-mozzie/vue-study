// 引入Vue
import Vue from 'vue'

// 引入App
import App from './App.vue'

//关闭生产提示
Vue.config.productionTip = false

//引入插件
import plugin from './plugins'

//使用插件
Vue.use(plugin)

//创建vue对象
new Vue({
    el: '#app',
    render: h => h(App)
})
