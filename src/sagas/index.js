
import app from './app';
import home from 'pages/home/saga';

// import feedback from 'pages/feedback/saga';

export default function* rootSaga() {
    yield [
        app(), //app中start进行js鉴权/免登，及其他初始化操作
        home(),
    ]
}
