export default{
    //第一个参数是Vue，后面的参数是使用者自己传递的数据
    install(Vue){
        Vue.prototype.hello = () => { alert('你好啊')}
    }
}
