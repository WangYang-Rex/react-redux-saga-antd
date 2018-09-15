import * as Act from 'actions';
import { put, select, call, takeEvery } from 'redux-saga/effects';
import util, { callTakeEvery, callTakeLatest } from '../lib/util.js';
import * as Fetch from 'server';

// 项目启动配置基础设置
let start = function*() {
  if (!__LOCAL__) {
    // 特殊处理 如果是login页面，则走login的js鉴权+免登 否则走这里的dd_config
    if (location.href.indexOf('#/login') < 0) {
      yield put({
        type: Act.DD_CONFIG,
        needAuth: true,
      });
    }
  }
};
const test_login = function*() {
  if (__LOCAL__) {
    try {
      yield call(Fetch.test_login, {
        'corpId' : 'ding50772abe1952f56d35c2f4657eb6378f',  //测试10
        // corpId: 'ding7fa044c9c343ff1f35c2f4657eb6378f', //光科技
        // 'corpId' : 'dingbcf5486299627a68',
        userName: `王洋${new Date().getTime()}`,
        // userId: '091654391836493241', //文芳
        userId: '03171462191449531513', //凯伦
        // userId: '073726134820858648', //黑草
        // userId: '125745005621569992', //周成杰
        // userId: '0716480131944864', //王洋

        // 'userId': '0716480131944864',
        userPic: '',
        host: 'roundtables.superboss.cc',
        ifAdmin: true,
      });
      // yield put({
      //   type: Act.INIT_METHODS,
      // });
    } catch (e) {}
  }
};
const init_methods = function*() {
  yield callTakeEvery(Act.INIT_METHODS, function*() {
    // yield [
    //   get_permission_menus(),
    //   get_permission_buttons(),
    //   getCommonDeptList(),
    //   keepRecordStatus(),
    //   commonInvalidReasons(),
    // ];
    yield put({
      type: Act.GET_HIGH_ADD_SEA_LIST, //GET_HIGH_SEA_LIST
      params: {
        seasObject: 'CUSTOMER',
      },
    });
  });
};

export default function* rootSaga() {
  yield [
    start(),
    test_login(),
    init_methods(),
  ];
}
