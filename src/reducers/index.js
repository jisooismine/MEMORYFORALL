import { combineReducers } from "redux";

import posts from './posts';
//combineReducers用于对多个reducer进行整合 下面这种写法要求state的属性名必须与子reducer同名 
//根据state的key去执行相应的子reducer
export default combineReducers({
    posts,
})