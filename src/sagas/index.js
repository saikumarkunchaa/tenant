import { put, takeLatest, all, call, take } from "redux-saga/effects";
function* CreateTenant(info) {
  try {
    const result = yield call(fetch, "https://sai.com", {
      method: "POST",
      headers: {
        Accept: "application/json, application/xml, text/plain, text/html, *.*",
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
      },
      body: JSON.stringify(info)
    });
  } catch (error) {
    console.log(error);
  }
}
function* actionWatcher() {
  //yield takeLatest('CREATE_TENANT',CreateTenant);
  const action = yield take("CREATE_TENANT");
  yield call(CreateTenant, action.payload);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
