//routes

import express from 'express';
import {getPosts, createPost, updatePost, deletePost, likePost} from '../controllers/posts.js';

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost); 
router.patch("/:id/likePost", likePost);

export default router;

//We don't want to write logic here as both routes and logic will make this file too long and hence, we have the controllers folder