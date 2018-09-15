import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Router, Route, hashHistory, IndexRoute } from "react-router";
import store from "stores";
// import "normalize.css/normalize.css";
import "styles/app.styl";

//业务逻辑初始化操作 该操作移植到sagas/app.js中
// import util from 'lib/util.js';
// let _corpId = util.getUrlParam('corpId') || util.getUrlParam('corpId', location.href);
// _corpId ? window.localStorage.setItem('corpId', _corpId) : null;
// console.log('index:', _corpId);
// if (window.chrome && window.chrome.webstore) { // This is a Chrome only hack
//     // see https://github.com/livereload/livereload-extensions/issues/26
//     setInterval(function() {
//         document.body.focus();
//     }, 200);
// }
// bind fastclick
// window.FastClick && FastClick.attach(document.body);

class App extends React.Component {
  componentWillMount() {}

  render() {
    return this.props.children;
  }
}

// 注意点
// 1、require('components/Index').default中require方法的参数不能使用变量，只能使用字符串！
// 2、如果你的组件是使用es5的module.exports导出的话，那么只需要require('components/Index')即可。而如果你的组件是使用es6的export default导出的话，那么需要加上default！例如：require('components/Index').default
// 3、如果在路由页面使用了按需加载（require.ensure）加载路由级组件的方式，那么在其他地方（包括本页面）就不要再import了，否则不会打包生成chunk文件。简而言之，需要按需加载的路由级组件必须在路由页面进行加载。

// const PageHome = (location, cb) => {
//   require.ensure(
//     [],
//     (require, path) => {
//       cb(null, require("pages/home/home.js").default);
//     },
//     "home"
//   );
// };
import PageHome from 'pages/home';


let routes = (
  <Route name="app" path="/" component={App}>
    <IndexRoute component={PageHome} />
    {/* <Route path="home" getComponent={PageHome} /> */}
    <Route path="home" component={PageHome} />
  </Route>
);
class Root extends React.Component {
  render() {
    return <Router history={hashHistory}>{routes}</Router>;
  }
}
// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("App")
);

if (module.hot) {
  module.hot.accept();
}
