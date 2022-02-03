import mongoose from 'mongoose';

//creating a Schema
//This is how each blog post will look

const postSchema = mongoose.Schema({
    creator: String,
    title: String,
    details: String,
    deadline: String,
    tags: [String],
    selectedFile: String, //going to convert image into a string using base64(you didn't install it yet cuz there was some issue)
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

//turning schema into a model
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;