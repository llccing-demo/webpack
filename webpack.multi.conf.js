const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 1.写成数组的方式可以打出多个入口文件，不过这里打包后的文件都合成了一个
    // entry: ['./src/index.js', './src/login.js'],
    // 2.真正实现多入口和多出口需要写成对象的方式
    entry: {
        index: './src/index.js',
        login: './src/login.js'
    },
    output: {
        // 1. filename: 'bundle.js',
        // 2. [name]就可以将出口文件名和入口文件名一一对应
        // 打包后会生成index.js和login.js文件
        filename: '[name].[hash:4].js',
        path: path.resolve('dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            // 对应关系，index.js对应的是index.html
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './src/login.html',
            filename: 'login.html',
            // 对应关系，login.js对应的是login.html
            chunks: ['login']
        })
    ],
    mode: 'development'
}