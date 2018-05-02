const path = require('path');
// 插件都是一个类，所以我们命名的时候尽量使用大写开头
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口文件
    entry: './src/index.js',
    // 出口文件
    output: {
        // 打包后的文件名称。添加hash可以防止文件缓存，每次都会生成4位hash串。
        filename: 'bundle.[hash:4].js',
        // 打包后的目录，必须是绝对路径
        path: path.resolve('dist')
    },
    plugins: [
        // 通过new实例化，来使用插件
        new HtmlWebpackPlugin({
            // 用哪个html作为模板
            // 在src目录下创建一个index.html页面当作模板来用
            template: './src/index.html',
            // 会在打包好的bundle.js后面加上hash串
            // hash: true
        })
    ],
    mode: 'development'
};
