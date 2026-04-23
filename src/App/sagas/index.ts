
import { all } from 'redux-saga/effects';
import { userLogin, watchUserGoogleLogin, watchUserRegister, watchGetProducts, watchGetStocks, watchGetUsers } from './auth';

export default function* rootSaga() {
  yield all([userLogin(), watchUserGoogleLogin(), watchUserRegister(), watchGetProducts(), watchGetStocks(), watchGetUsers()]);
}
