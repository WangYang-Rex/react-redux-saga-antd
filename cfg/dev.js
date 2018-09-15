'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
// let BowerWebpackPlugin = require('bower-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
const HappyPack = require('happypack');
var happyThreadPool = HappyPack.ThreadPool({ size: 5 });

let config = Object.assign({}, baseConfig, {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:' + defaultSettings.port,
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',  //添加这一项
    './src/index'
  ],
  cache: true,
  // devtool: 'eval-source-map',
  devtool: 'source-map',
  plugins: [
    new HappyPack({
      //用id来标识 happypack处理那里类文件
      id: 'happyBabel',
      //如何处理  用法和loader 的配置一样
      loaders: [{
        loader: 'babel-loader?cacheDirectory=true',
      }],
      //共享进程池
      threadPool: happyThreadPool,
      //允许 HappyPack 输出日志
      verbose: true,
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    // new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/),
    new webpack.HotModuleReplacementPlugin(),  // 开启全局的模块热替换（HMR）
    // new webpack.NamedModulesPlugin(),    // 当模块热替换（HMR）时在浏览器控制台输出对用户更友好的模块名字信息
    // new BowerWebpackPlugin({
    //   searchResolveModulesDirectories: false
    // }),
    //以下添加了__LOCAL__变量，代码中可以判断这个来判断是否本地开发
    new webpack.DefinePlugin({
      '__LOCAL__': true
    })
  ],
  module: defaultSettings.getDefaultModules(false)
});

// Add needed loaders to the defaults here
config.module.rules.push({
  test: /\.(js|jsx)$/,
  // loader: [
  //   // 'react-hot-loader',
  //   'babel-loader'
  // ],
  loader: 'happypack/loader?id=happyBabel',
  include: [].concat(
    // config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  ),
  exclude: '/node_modules/'
});

module.exports = config;
