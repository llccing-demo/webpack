const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin')

const baseConfig = require('./webpack.base.conf');

module.exports = merge(baseConfig, {
    plugins: [new CleanWebpackPlugin('dist')]
});
