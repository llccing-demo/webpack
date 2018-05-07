const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

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
    // 提取公共代码
    optimization: {
        splitChunks: {
            cacheGroups: {
                // 抽离第三方插件
                vendor: {
                    // 指定是node_modules下的第三方包
                    test: /node_modules/,
                    chunks: 'initial',
                    // 打包后的文件名，任意命名
                    name: 'vendor',
                    // 设置优先级，防止和自定义公共代码提取时被覆盖，不进行打包
                    priority: 10
                },
                // 抽离自己写的公共代码，utils这个名字可以随意起
                utils: {
                    chunks: 'initial',
                    name: 'utils',
                    // 只要超出0字节就生成一个新包
                    minSize: 0
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            // 对应关系，index.js对应的是index.html
            chunks: ['vendor', 'index']
        }),
        new HtmlWebpackPlugin({
            template: './src/login.html',
            filename: 'login.html',
            // 对应关系，login.js对应的是login.html
            chunks: ['vendor', 'login']
        }),
        new ExtractTextWebpackPlugin('css/iview.css')
    ],
    resolve: {
        // 别名
        alias: {
            $: 'window.$'
        },
        // 省略后缀
        extensions: ['.js', '.json', '.css']
    }
};
