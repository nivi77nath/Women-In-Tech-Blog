//controllers
//handles all the logic
//creating all handlers for our routes

import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';

//.find() will take time so we need to use asynchronous function 

export const getPosts =  async (req, res) => {
    try{
        const postMessages = await PostMessage.find(); //finding something will take time => asynchronous function. thus, we use await
        res.status(200).json(postMessages);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}

export const createPost = async(req, res) => {
// Body is undefined.
    const post = req.body;

    const newPost = new PostMessage(post);
    console.log(newPost);


    try{
        await newPost.save();

        res.status(201).json(newPost); //201 => created
    }
    catch(error){
        res.status(409).json({message: error.message}); //409 => conflict
    }
 
}


export const updatePost = async(req, res) => {

    //you get the id from the url. eg: /posts/123
    //while destructuring, you can rename the id
    const {id: _id} = req.params;
    const post = req.body;

    //check to see if _id is really a mongoose object id
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true});

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    await PostMessage.findByIdAndRemove(id);

    res.json({message: 'Post Deleted'})
}

export const likePost = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });

    res.json(updatedPost);
}

