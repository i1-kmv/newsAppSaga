import {getLatestNews, getPopularNews} from "../../api"
import {GET_NEWS} from "../constants"
import {takeEvery, put, call, fork} from 'redux-saga/effects'
import { setLatestNewsAC, setPopularNewsAC } from "../actions/actionCreator"

export function* handleLatestNews() {
    const { hits } = yield call(getLatestNews, 'react')
    yield put(setLatestNewsAC(hits))
}

export function* handlePopularNews() {
    const { hits } = yield call(getPopularNews)
    yield put(setPopularNewsAC(hits))
}

export function* handleNews() {
    yield fork(handlePopularNews)
    yield fork(handleLatestNews)
}

export function* watchClickSaga() {
    yield takeEvery(GET_NEWS, handleNews)
}

export default function* rootSaga() {
    yield watchClickSaga();
}