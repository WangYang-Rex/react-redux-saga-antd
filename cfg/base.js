'use strict';
let path = require('path');
let defaultSettings = require('./defaults');

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
// let npmBase = path.join(__dirname, '../node_modules');
// let additionalPaths = [ path.join(npmBase, 'react-bootstrap') ];
let additionalPaths = [];

module.exports = {
  // additionalPaths: additionalPaths,
  // port: defaultSettings.port,
  // debug: true,
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'app.js',
    publicPath: defaultSettings.publicPath
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    headers:{'Access-Control-Allow-Origin':'*'},  //添加这一项
    port: defaultSettings.port,
    publicPath: defaultSettings.publicPath,
    noInfo: false
  },
  resolve: {
    extensions: ['.web.js', '.js', '.jsx', 'json'],
    alias: {
      actions: `${defaultSettings.srcPath}/actions`,
      components: `${defaultSettings.srcPath}/components`,
      pages: `${defaultSettings.srcPath}/pages`,
      sources: `${defaultSettings.srcPath}/sources/`,
      stores: `${defaultSettings.srcPath}/stores`,
      styles: `${defaultSettings.srcPath}/styles`,
      config: `${defaultSettings.srcPath}/config/` + process.env.REACT_WEBPACK_ENV,
      lib: `${defaultSettings.srcPath}/lib`,
      util: `${defaultSettings.srcPath}/lib/util.js`,
      server: `${defaultSettings.srcPath}/lib/server`,
      dingApi: `${defaultSettings.srcPath}/lib/dingApi.js`,
      'react/lib/ReactMount': 'react-dom/lib/ReactMount',
      svg: `${defaultSettings.srcPath}/images/svg`,
      img: `${defaultSettings.srcPath}/images`
    }
  },
  module: {}
};
