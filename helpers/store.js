import { createStore, combineReducers } from "redux";
import BlogReducers from "./redux/blog/reducers";

const store = createStore(combineReducers({ blogs: BlogReducers }));

export default store