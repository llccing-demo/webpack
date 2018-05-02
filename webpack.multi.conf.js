const path = require('path');

module.exports = {
    // 1.写成数组的方式可以打出多个入口文件，不过这里打包后的文件都合成了一个
    entry: ['./src/index.js', './src/login.js'],
    // 2.真正实现多入口和多出口需要写成对象的方式
    entry: {
        index: './src/index.js',
        login: './src/login.js'
    },
    output: {
        // 1. filename: 'bundle.js',
        // 2. [name]就可以将出口文件名和入口文件名一一对应
        // 打包后会生成index.js和login.js文件
        filename: '[name].js',
        path: path.resolve('dist')
    },
    mode: 'development'
}