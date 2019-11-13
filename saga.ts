import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects';
import es6promise from 'es6-promise';
import fetch from 'isomorphic-unfetch';

import { failure, loadDataSuccess, tickClock } from './actions';
import { actionTypes } from './actions/types';
import { User } from './interfaces';
import { SagaIterator } from 'redux-saga';

es6promise.polyfill();

function* runClockSaga(): SagaIterator {
  yield take(actionTypes.START_CLOCK);
  while (true) {
    yield put(tickClock(false));
    yield delay(1000);
  }
}

function* loadDataSaga(): SagaIterator {
  try {
    const res = yield call(fetch, 'https://jsonplaceholder.typicode.com/users');
    const data: User[] = yield res.json();
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* rootSaga(): SagaIterator {
  yield all([call(runClockSaga), takeLatest(actionTypes.LOAD_DATA, loadDataSaga)]);
}

export default rootSaga;
