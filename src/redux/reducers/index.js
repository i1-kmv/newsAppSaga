import {combineReducers} from "redux"
import newsReducer from "./newsReducer"
import errorsReducer from "./errorsReducer"

const reducer = combineReducers({
    newsReducer,
    errorsReducer,
})

export default reducer