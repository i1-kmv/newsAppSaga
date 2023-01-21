import {
    SET_LATEST_NEWS,
    SET_POPULAR_NEWS
} from "../constants"


export const setLatestNewsAC = (payload) => ({
    type: SET_LATEST_NEWS,
    payload
})

export const setPopularNewsAC = (payload) => ({
    type: SET_POPULAR_NEWS,
    payload
})

