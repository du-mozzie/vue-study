// 引入Vue
import Vue from 'vue'

// 引入App
import App from './App.vue'

//关闭生产提示
Vue.config.productionTip = false


/* 
全局使用混合
*/
import {mixin} from './mixin'
Vue.mixin(mixin)


//创建vue对象
new Vue({
    el: '#app',
    render: h => h(App)
})
