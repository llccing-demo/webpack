const path = require('path');

module.exports = {
    // 入口文件
    entry: './src/index.js',
    // 出口文件
    output: {
        // 打包后的文件名称
        filename: 'bundle.js',
        // 打包后的目录，必须是绝对路径
        path: path.resolve('dist')
    },
    mode: 'development'
};
