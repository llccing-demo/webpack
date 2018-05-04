const path = require('path');
// 插件都是一个类，所以我们命名的时候尽量使用大写开头
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 拆分css样式的插件
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpack = require('webpack');

// 测试多个css文件，拆分构建
// const iviewCss = new ExtractTextWebpackPlugin('css/iview.css');
// const bootstrapCss = new ExtractTextWebpackPlugin('css/bootstrap.css');

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
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                // 只转化src目录下的js
                include: /src/,
                // 排除node_modules，优化构建速度
                exclude: /node_modules/
            },
            {
                // 解析css
                test: /\.css$/,
                // 从右向左解析
                use: ExtractTextWebpackPlugin.extract({
                    use: ['css-loader', 'postcss-loader']
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextWebpackPlugin.extract({
                    use: ['css-loader', 'postcss-loader', 'sass-loader']
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextWebpackPlugin.extract({
                    use: ['css-loader', 'postcss-loader', 'less-loader']
                })
            },
            {
                test: /\.(eot|ttf|woff|svg)$/,
                use: 'file-loader'
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 小于8K的图片自动转成base64，并且不会存在实体图片
                            limit: 8192,
                            // 图片打包后存放的目录
                            outputPath: 'images/'
                        }
                    }
                ]
            },
            {
                test: /\.(htm|html)$/,
                use: 'html-withimg-loader'
            }
        ]
    },
    plugins: [
        // 通过new实例化，来使用插件
        new HtmlWebpackPlugin({
            // 用哪个html作为模板
            // 在src目录下创建一个index.html页面当作模板来用
            template: './src/index.html'
            // 会在打包好的bundle.js后面加上hash串
            // hash: true
        }),
        // 拆分后会把css文件放到dist目录下的css/style.css
        new ExtractTextWebpackPlugin('css/iview.css'),
        // new ExtractTextWebpackPlugin('css/bootstrap.css')
        // 构建前先清空dist目录
        new CleanWebpackPlugin('dist'),
        // 热替换
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        host: 'localhost',
        port: 3000,
        // 自动打开浏览器
        open: true,
        // 开启热更新
        hot: true
    },
    resolve: {
        // 别名
        alias: {
            $: 'window.$'
        },
        // 省略后缀
        extensions: ['.js', '.json', '.css']
    },
    mode: 'development'
};
