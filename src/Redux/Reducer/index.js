import { combineReducers } from "redux";
import {coursesReducer} from './coursesReaducer'
import { currentPageReducer } from "./currentPageReducer";
import { loadingReducer } from "./loadingReducer";
import { singleCourseReducer } from "./singleCourseReducer";
import {userReducer} from './userReducer'
export const reducers = combineReducers({
    courses : coursesReducer,
    course : singleCourseReducer,
    user : userReducer,
    loading :loadingReducer,
    currentPage:currentPageReducer
})