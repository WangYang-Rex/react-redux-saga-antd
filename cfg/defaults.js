/**
 * Function that returns default values.
 * Used because Object.assign does a shallow instead of a deep copy.
 * Using [].push will add to the base array, so a require will alter
 * the base array output.
 */
'use strict';

const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const dfltPort = 8000;
let ExtractTextPlugin = require('extract-text-webpack-plugin');

const svgDirs = [
  // require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd 内置 svg 文件
  path.resolve(srcPath, 'images/svg')  // 2. 自己私人的 svg 存放目录
];

/**
 * Get the default modules object for webpack
 * @return {Object}
 */
function getDefaultModules(exportcss) {
  return {
    // preLoaders: [
    //   {
    //     test: /\.(js|jsx)$/,
    //     include: srcPath,
    //     loader: 'eslint-loader'
    //   }
    // ],
    rules: [
      // {
      //   test: /\.(js|jsx)$/,
      //   enforce: "pre",
      //   loader: "eslint-loader"
      // },
      {
        test: /\.css$/,
        // use: exportcss ? ExtractTextPlugin.extract('style-loader','css-loader') : 'style-loader!css-loader'
        use: exportcss ? ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        }) : ['style-loader','css-loader']
      },
      {
        test: /\.sass/,
        // use: exportcss ? ExtractTextPlugin.extract('style-loader','css-loader!sass-loader?outputStyle=expanded&indentedSyntax') : 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
        use: exportcss ? ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','sass-loader?outputStyle=expanded&indentedSyntax']
        }) : ['style-loader','css-loader','sass-loader?outputStyle=expanded&indentedSyntax']
      },
      {
        test: /\.scss/,
        // use: exportcss ? ExtractTextPlugin.extract('style-loader','css-loader!sass-loader?outputStyle=expanded') : 'style-loader!css-loader!sass-loader?outputStyle=expanded'
        use: exportcss ? ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','sass-loader?outputStyle=expande']
        }) : ['style-loader','css-loader','sass-loader?outputStyle=expanded']
      },
      {
        test: /\.less/,
        // use: exportcss ? ExtractTextPlugin.extract('style-loader','css-loader!less-loader') : 'style-loader!css-loader!less-loader'
        use: exportcss ? ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','less-loader']
        }) : ['style-loader','css-loader','less-loader']
      },
      {
        test: /\.styl/,
        use: exportcss ? ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','stylus-loader']
        }) : ['style-loader','css-loader','stylus-loader']
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        use: ['url-loader?limit=8192']
      },
      {
        test: /\.(svg)$/,
        use: ['svg-sprite-loader'],
        include: svgDirs  // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
      }
      //,
      // {
      //   test: /\.(mp4|ogg|svg)$/,
      //   use: ['file-loader']
      // }
    ]
  };
}

module.exports = {
  srcPath: srcPath,
  publicPath: '/assets/',
  // publicPath: '/',
  port: dfltPort,
  getDefaultModules: getDefaultModules
};
