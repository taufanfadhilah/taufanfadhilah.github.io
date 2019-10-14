import { createStore, combineReducers } from "redux";
import BlogReducers from "./redux/blog/reducers";
import ExperimentReducers from './redux/experiment/reducers'

const store = createStore(combineReducers({ blogs: BlogReducers, experiments: ExperimentReducers }));

export default store