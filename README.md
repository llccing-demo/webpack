# webpack4尝试

##知识点

1. webpack4中除了正常安装webpack之外，需要再单独安装一个webpack-cli
2. node v8.2之后，有一个npx，npx会执行bin里的文件。（不是很懂。说的是node_modules？）
3. 执行npx webpack命令时，webpack会自动查找项目src目录下的index.js文件，然后进行打包，在dist目录下生成一个打包好的main.js文件。这是0配置操作，但是实际项目中，还是需要通过配置文件进行灵活的配置。
4. npx webpack， 不设置mode时，打包出来的文件会自动压缩。npx webpack --mode development，设置为mode开发模式，打包后的文件不被压缩。


webpack配置文件架子
```
// webpack.conf.js
const path = require('path');

module.exports = {
    // 入口文件
    entry: '',
    // 出口文件
    output: {},
    // 处理对应模块
    module: {},
    // 对应的插件
    plugins: [],
    // 开发服务器配置
    devServer: {},
    // 模式配置
    mode: 'development'
};

```