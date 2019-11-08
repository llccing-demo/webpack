const merge = require('webpack-merge');
const webpack = require('webpack');

const baseConfig = require('./webpack.base.conf');

module.exports = merge(baseConfig, {
    devtool: 'inline-source-map',
    plugins: [
        // 热替换
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        host: 'localhost',
        port: 8888,
        // 自动打开浏览器
        open: true,
        // 开启热更新
        hot: true
    }
});
