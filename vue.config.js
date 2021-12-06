// 修改vue脚手架配置
module.exports = {
    //关闭语法检查
    lintOnSave:false,
    //配置代理服务器
    devServer: {
        proxy: 'http://localhost:5000'
    }
}
