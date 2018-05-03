const path = require('path');
// 插件都是一个类，所以我们命名的时候尽量使用大写开头
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 拆分css样式的插件
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

// 测试多个css文件，拆分构建
const iviewCss = new ExtractTextWebpackPlugin('css/iview.css');
const bootstrapCss = new ExtractTextWebpackPlugin('css/bootstrap.css')

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
                // 解析css
                test: /\.css$/,
                // 从右向左解析
                use: iviewCss.extract({
                    use: 'css-loader'
                })
                // 也可以写成下面的方式，方便些配置参数
                // use: [
                //     {
                //         loader: 'style-loader'
                //     },
                //     {
                //         loader: 'css-loader'
                //     }
                // ]

            },{
                test: /\.scss$/,
                use: bootstrapCss.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },{
                test: /\.(eot|ttf|woff|svg)$/,
                use: 'file-loader'
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
        iviewCss,
        bootstrapCss
    ],
    mode: 'development'
};
