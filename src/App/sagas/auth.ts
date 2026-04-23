import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery, takeLatest, takeLeading } from 'redux-saga/effects';
import { authLogin, googleLogin, userRegister, getProducts, getStocks, getUsers } from '../api/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

import {
  USER_LOGIN,
  USER_LOGIN_COMPLETED,
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_GOOGLE_LOGIN,
  USER_REGISTER,
  USER_REGISTER_COMPLETED,
  USER_REGISTER_ERROR,
  USER_REGISTER_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_FAILURE,
  GET_STOCKS_SUCCESS,
  GET_STOCKS_REQUEST,
  GET_STOCKS_FAILURE,
  GET_USERS_SUCCESS,
  GET_USERS_REQUEST,
  GET_USERS_FAILURE,
} from '../actions';

export function* userLoginAsync(action: { payload: { email: string; password: string; }; }):SagaIterator {
  yield put({ type: USER_LOGIN_REQUEST });
  try {
    const data = yield call(authLogin, action.payload);

    if (data) {
      console.log("Saga received data, dispatching COMPLETED:", data);
      yield put({ type: USER_LOGIN_COMPLETED, payload: data });
    }
  } catch (error: any) {
    console.error("Saga Login Error:", error.message);
    yield put({ type: USER_LOGIN_ERROR, payload: error.message });
  }
}

export function* userGoogleLoginAsync(): SagaIterator {
  yield put({ type: USER_LOGIN_REQUEST });
  try {
    yield call([GoogleSignin, 'hasPlayServices']);
    const userInfo = yield call([GoogleSignin, 'signIn']);
    
    const data = yield call(googleLogin, userInfo);

    if (data) {
      yield put({ type: USER_LOGIN_COMPLETED, payload: data });
    }
  } catch (error: any) {
    let message = error.message;
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      message = 'Sign in cancelled';
    } else if (error.code === statusCodes.IN_PROGRESS) {
      message = 'Sign in in progress';
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      message = 'Play services not available';
    }
    console.error("Saga Google Login Error:", message);
    yield put({ type: USER_LOGIN_ERROR, payload: message });
  }
}

export function* userRegisterAsync(action: { payload: { email: string; password: string; firstName: string; lastName: string; }; }): SagaIterator {
  yield put({ type: USER_REGISTER_REQUEST });
  try {
    const response = yield call(userRegister, action.payload);
    yield put({ type: USER_REGISTER_COMPLETED, payload: response });
  } catch (error: any) {
    yield put({ type: USER_REGISTER_ERROR, payload: error.message });
    console.log("Saga Register Error:", error.message);
  }
}

export function* getProductsAsync(action: { payload: string; }): SagaIterator {
  try {
    const data = yield call(getProducts, action.payload);
    yield put({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error: any) {
    yield put({ type: GET_PRODUCTS_FAILURE, payload: error.message });
  }
}

export function* getStocksAsync(action: { payload: string; }): SagaIterator {
  try {
    const data = yield call(getStocks, action.payload);
    yield put({ type: GET_STOCKS_SUCCESS, payload: data });
  } catch (error: any) {
    yield put({ type: GET_STOCKS_FAILURE, payload: error.message });
  }
}

export function* getUsersAsync(action: { payload: string; }): SagaIterator {
  try {
    const data = yield call(getUsers, action.payload);
    yield put({ type: GET_USERS_SUCCESS, payload: data });
  } catch (error: any) {
    yield put({ type: GET_USERS_FAILURE, payload: error.message });
  }
}

export function* watchGetProducts() {
  yield takeEvery(GET_PRODUCTS_REQUEST as any, getProductsAsync);
}

export function* userLogin() {
  yield takeLeading(USER_LOGIN as any, userLoginAsync);
}

export function* watchUserGoogleLogin() {
  yield takeLeading(USER_GOOGLE_LOGIN as any, userGoogleLoginAsync);
}

export function* watchUserRegister() {
  yield takeEvery(USER_REGISTER as any, userRegisterAsync);
}

export function* watchGetStocks() {
  yield takeEvery(GET_STOCKS_REQUEST as any, getStocksAsync);
}

export function* watchGetUsers() {
  yield takeEvery(GET_USERS_REQUEST as any, getUsersAsync);
}