# `webpack4 尝试`

> TODO: description

## 知识点

1. webpack4中除了正常安装webpack之外，需要再单独安装一个webpack-cli
2. node v8.2之后，有一个npx，npx会执行bin里的文件。（不是很懂。说的是node_modules？）
3. 执行npx webpack命令时，webpack会自动查找项目src目录下的index.js文件，然后进行打包，在dist目录下生成一个打包好的main.js文件。这是0配置操作，但是实际项目中，还是需要通过配置文件进行灵活的配置。
4. npx webpack， 不设置mode时，打包出来的文件会自动压缩。npx webpack --mode development，设置为mode开发模式，打包后的文件不被压缩。


webpack配置文件架子
```js
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

如果需要使用webpack.conf.prod.js配置文件，需要再package.json中指定 webpack --config webpack.conf.prod.js指定配置文件的路径。并且mode配置也可以写在webpack.conf.prod.js这个配置文件中。

## 多入口文件

有两种打包方式，一种是没有关系的，写数组，实现多个文件打包。另一种是每个文件都单独打包成一个文件。

本地通过 cnpm i html-webpack-plugin --save-dev 失败，尝试了使用阿里云的docker能够成功安装，同时阿里云的docker使用的是nvm来管理node版本。方便切换。

```js
1. 下载并安装NVM脚本（这里不能使用github上最新的nvm会报错。）
curl https://raw.githubusercontent.com/creationix/nvm/v0.13.1/install.sh | bash
source ~/.bash_profile

2. 列出所需要的版本
nvm list-remote

3. 安装相应的版本
nvm install v0.10.30

4. 查看已安装的版本
nvm list

5.切换版本
nvm use v0.10.30


6.设置默认版本
nvm alias default v0.10.30
```

## 参考

- [webpack4-用之初体验](https://juejin.im/post/5adea0106fb9a07a9d6ff6de?utm_source=gold_browser_extension)

- [webpack4-demo](https://github.com/fengyun2/webpack4-demo)