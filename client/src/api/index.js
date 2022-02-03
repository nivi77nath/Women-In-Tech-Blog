import axios from 'axios';

const url = 'http://localhost:5000/posts'; //base url pointing to our backend route. The url simply returns all the posts we have in the database

export const fetchPosts = () =>  axios.get(url);

//to create the post as soon as the user fills the form
export const createPost = (newPost) => axios.post(url, newPost); //now, go create an action

//all actions in the backend are going to be done using redux, we need to dispatch those actions, hence, we need redux
//redux makes our application scalable

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) =>  axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`); //go create an action





