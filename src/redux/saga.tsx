import {
  takeEvery,
  takeLeading,
  call,
  takeLatest,
  delay,
  put,
} from 'redux-saga/effects';
import {ActionTypes} from '../utils/actiontypes';
import {API} from '../utils/api';

function* nextProductAsync(action: any) {
  yield delay(3000);
  yield put({type: ActionTypes.NEXT_PRODUCT_ASYNC, payload: action.payload});
}

function* prevProductAsync(action: any) {
  yield delay(3000);
  yield put({type: ActionTypes.PREV_PRODUCT_ASYNC, payload: action.payload});
}

function* searchProductAsync(action: any) {
  yield delay(2000);
  try {
    const {data} = yield call(API.product, action.payload);
    yield put({
      type: ActionTypes.SEARCH_PRODUCT_SUCCESS,
      payload: data.products,
    });
  } catch (err) {
    yield put({type: ActionTypes.SEARCH_PRODUCT_FAILURE, payload: err});
  }
}

export function* watchNextProduct() {
  yield takeLatest(ActionTypes.NEXT_PRODUCT, nextProductAsync);
}

export function* watchPrevProduct() {
  yield takeLatest(ActionTypes.PREV_PRODUCT, prevProductAsync);
}

export function* watchSearchProduct() {
  yield takeLatest(ActionTypes.SEARCH_PRODUCT, searchProductAsync);
}
