'use strict';

let path = require('path');
let webpack = require('webpack');

let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
// let BowerWebpackPlugin = require('bower-webpack-plugin');
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
let ExtractTextPlugin = require('extract-text-webpack-plugin');
const HappyPack = require('happypack');
var happyThreadPool = HappyPack.ThreadPool({ size: 5 });

let config = Object.assign({}, baseConfig, {
  entry: {
    index: path.join(__dirname, '../src/index'),
    vendor: ['react', 'redux', 'react-redux', 'react-dom', 'moment']
  },
  output: {
    path: path.join(__dirname, '../../crm-release/pc'),
    filename: 'app.js',
    sourceMapFilename: '[file].map',
    // publicPath: defaultSettings.publicPath,
    publicPath: './',
    chunkFilename: '[name].[chunkhash:4].chunk.js'
  },
  cache: false,
  devtool: false,
  // devtool: 'source-map',
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
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/), //指定moment的local
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      minChunks: Infinity
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      '__LOCAL__': false
    }),
    // new BowerWebpackPlugin({
    //   searchResolveModulesDirectories: false
    // }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        comparisons: false,
      },
    }),
    new ExtractTextPlugin({
      filename: 'app.css',
      disable: false,
      allChunks: true
    }),
    // new BundleAnalyzerPlugin(), //对打包资源的分析插件
  ],
  module: defaultSettings.getDefaultModules(true)
});

// Add needed loaders to the defaults here
config.module.rules.push({
  test: /\.(js|jsx)$/,
  // loader: ['babel-loader'],
  loader: 'happypack/loader?id=happyBabel',
  include: [].concat(
    [ path.join(__dirname, '/../src') ]
  )
});

module.exports = config;
