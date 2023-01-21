import {getLatestNews, getPopularNews} from "../../api"
import {GET_LATEST_NEWS, GET_POPULAR_NEWS, SET_LATEST_NEWS_ERROR, SET_POPULAR_NEWS_ERROR} from "../constants"
import {takeEvery, put, call, fork, all} from 'redux-saga/effects'
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


export function* watchPopularSaga() {
    yield takeEvery(GET_POPULAR_NEWS, handlePopularNews);
}

export function* watchLatestSaga() {
    yield takeEvery(GET_LATEST_NEWS, handleLatestNews);
}

export default function* rootSaga() {
    yield all([
        fork(watchPopularSaga),
        fork(watchLatestSaga),
    ]);
}