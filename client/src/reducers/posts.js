//reducers
import {FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes';

//renamed state to posts because the state here is always some post
const reducer = (posts = [], action) => {
    
    switch(action.type){
        case FETCH_ALL: 
            return action.payload;

        case CREATE: 
            return [...posts, action.payload];
        

        // for both update and like
        case UPDATE:
            return posts.map((post) => post._id === action.payload._id? action.payload : post );

        case DELETE:
            return posts.filter((post) =>  {return(post._id !== action.payload)});


        default: 
            return posts;
    }
}

//we will use this in the combineReducers function in the index.js file in the same folder
export default reducer;