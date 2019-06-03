import {combineReducers} from "redux"
import homeReducer from "../reducer/home"
import detailReduce from "../reducer/detail"

export default combineReducers({
    home:homeReducer,
    detail:detailReduce
})