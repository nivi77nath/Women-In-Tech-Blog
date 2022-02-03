//actions

//create constants in diff folder so there's no typo mistake 
import {FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes';

//we need to make use of the index.js in the api folder
import * as api from '../api'; //imports everything from the index.js file inside the api folder

//Action Creators - functions that create actions

//since we are working with asynchronous data and to fetch all the posts, some time is gonna have to pass and we use Redux thunk for that
export const getPosts = () => async(dispatch) => {

    try {
        const { data } = await api.fetchPosts(); //we're first getting the response from the api and in the response, we always have a data object and hence we say {data}

        //we can directly dispatch an action without defining it specifically
        dispatch({type:FETCH_ALL, payload: data}); //with redux thunk, you've to dispatch the action instead of returning it
        // actions must have a type property
    } catch (error) {
       console.log(error) 
    }
 
}

//create post to get the data typed in the form
export const createPost = (post) => async(dispatch) => {
    try {
        const {data} = await api.createPost(post);
        dispatch({type:CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
    //now, go and dispatch (import the createPost func there) it from the form component by importing the useDispatch hook
}

export const updatePost = (id, post) => async(dispatch) => {
    try {
        const {data} = await api.updatePost(id, post);
        dispatch({type: UPDATE, payload: data})
    } catch (error) {
        console.log(error);
    }
}


export const deletePost = (id) => async(dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async(dispatch) => {
    try {
        const {data} = await api.likePost(id);
        dispatch({type: UPDATE, payload: data})
    } catch (error) {
        console.log(error);
    }
}

