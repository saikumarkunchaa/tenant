import { put, takeLatest, all, call, take,takeEvery } from "redux-saga/effects";
export function* CreateTenant(info) {
  try {
    const result = yield call(fetch, "https://sai.com", {
      method: "POST",
      headers: {
        Accept: "application/json, application/xml, text/plain, text/html, *.*",
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
      },
      body: JSON.stringify(info)
    });
    return result;
  } catch (error) {
    console.log(error);
  }
}
export function* createNews(action) {
  try {
    const result = yield call(fetch, "https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        Accept: "application/json, application/xml, text/plain, text/html, *.*",
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
      },
      body: JSON.stringify(action.payload)
    });
  } catch (error) {
    console.log(error);
  }
}
export function* actionWatcher() {
  //yield takeLatest('CREATE_TENANT',CreateTenant);
  const action = yield take("CREATE_TENANT");
  yield call(CreateTenant, action.payload);
}
export function* actionCreateNews() {
  //yield takeLatest('CREATE_TENANT',CreateTenant);
  //console.log('kiran kumar saga');
  const actionData = yield takeLatest("CREATE_NEWS",createNews);
  yield put({ type: "DATA_LOADED", actionData });
 // yield call(createNews, action.payload);
}
export default function* rootSaga() {
  yield all([actionWatcher(), actionCreateNews()]);
}
