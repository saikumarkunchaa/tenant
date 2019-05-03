import { put, takeLatest, all, call, take, takeEvery } from "redux-saga/effects";
import axios from 'axios';
export const getHeaders = () => ({
'Content-Type': 'application/json'
});
export function* CreateTenant(info) {
  console.log('ds'+info)
  try {
    const result = yield call(fetch, "http://localhost:3002/news/createsssss", {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(info)
    });
    return result;
  } catch (error) {
    console.log(error);
  }
}
export function* createNews(info) {
  try {
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin' : '*',
    }
  }
    // const apidata = axios.post('http://localhost:3002/news/create',JSON.stringify(info.payload), axiosConfig)
    //   .then(res => {return res.data});
  //return apidata;
  const apidata = yield call(axios.post, 'http://localhost:3002/news/create',JSON.stringify(info.payload), axiosConfig);
  if(apidata.status == 200) { 
    yield put({type:'NEWS_CREATED',apidata});
  }  else {
    const status = 'fail';
    yield put({type:'NEWS_NOT_CREATED',status});
  }
} catch (error) {
    console.log(error);
  }
}
export function* actionWatcher() {
  //yield takeLatest('CREATE_TENANT',CreateTenant);
  const action = yield take("CREATE_TENANT");
  yield call(CreateTenant, action.payload);
  yield put({type: 'DATA_LOADED',action})
}
export function* actionCreateNews() {
  const actionData = yield takeLatest("CREATE_NEWS", createNews);
  yield put({ type: "NEWS_CREATED", actionData });
}
export function* actionLifeCycle() {
  yield takeLatest("LAZY_LOAD", lifeCycle);

}

export function* lifeCycle() {
  try {
    const response = yield call(axios.get, 'http://localhost:3002/news/list');
   // console.log(response);
    yield put({ type: "LAZY_LOADED", response });
  } catch (e) {
    yield put({ type: "LAZY_LOAD_ERROR", e });
  }

}

export default function* rootSaga() {
  yield all([actionWatcher(), actionCreateNews(), actionLifeCycle()]);
}
