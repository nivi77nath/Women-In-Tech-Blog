//reducers
import { combineReducers } from "redux";

import posts from './posts'; //from same folder

export default combineReducers({
    posts: posts
});