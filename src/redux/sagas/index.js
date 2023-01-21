import {getLatestNews, getPopularNews} from "../../api"
import {GET_NEWS, SET_LATEST_NEWS_ERROR, SET_POPULAR_NEWS_ERROR} from "../constants"
import {takeEvery, put, call, fork} from 'redux-saga/effects'
import { setLatestNewsAC, setPopularNewsAC } from "../actions/actionCreator"

export function* handleLatestNews() {
    try {
        const { hits } = yield call(getLatestNews, 'react')
        yield put(setLatestNewsAC(hits))
    } catch {
        yield put({type: SET_LATEST_NEWS_ERROR, payload: 'Error fetching latest news' })
    }
}

export function* handlePopularNews() {
   try {
       const { hits } = yield call(getPopularNews)
       yield put(setPopularNewsAC(hits))
   } catch {
       yield put({type: SET_POPULAR_NEWS_ERROR, payload: 'Error fetching popular news' })
   }
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