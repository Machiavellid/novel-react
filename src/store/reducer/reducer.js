import {combineReducers} from "redux"
import homeHotReducer from "./homeHot"
import homeVipReducer from "./homeVip"
import homeNewReducer from "./homeNew"
import cataReducer from "./cata"
import detailReduce from "../reducer/detail"


export default combineReducers({
    homeHot:homeHotReducer,
    detail:detailReduce,
    homeVip:homeVipReducer,
    homeNew:homeNewReducer,
    cata:cataReducer
})