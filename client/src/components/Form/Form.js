import React, {useState, useEffect} from 'react';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
// import FileBase from 'react-file-base64';
import useStyles from './stylesForm';
import {useDispatch, useSelector} from 'react-redux';
import {createPost, updatePost} from '../../actions/posts';


//To update, we've to somehow get the id of the post we're on, you'll have to get that from the post component

function Form({currentId, setCurrentId}) {

    const [postData, setPostData] = useState({
        creator:'',
        title:'',
        details:'',
        deadline:'',
        tags:'',
        selectedFile:'' //this is for the image which will be converted to a base64 string
    })

    const post = useSelector((state) => currentId? state.posts.find((p) => p._id === currentId): null);
    
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post])

    const handleSubmit = (e) =>{
        e.preventDefault();

        //once the action is dispatched here, go to the reducers

        if(currentId){
            dispatch(updatePost(currentId, postData));
            clear();
        }
        else{
            dispatch(createPost(postData));
            clear();
        }
    }

    const clear = () =>{
        setCurrentId(null);
        setPostData ({
            creator:'',
            title:'',
            details:'',
            deadline:'',
            tags:'',
            selectedFile:'' //this is for the image which will be converted to a base64 string
        });
    } 

    return (
            <Paper className={classes.paper}>
                <Typography style={{marginBottom: '15px',  color: '#470465',  textAlign:'center'}}  variant="h6">{currentId? 'Editing':'Creating'} a post</Typography>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <TextField
                        name="creator"
                        variant="outlined"
                        label="Creator"
                        value={postData.creator}
                        onChange={(e) => setPostData({...postData, creator: e.target.value})}
                    />

                    <TextField
                        name="title"
                        variant="outlined"
                        label="Title"
                        value={postData.title}
                        onChange={(e) => setPostData({...postData, title: e.target.value})}
                    />

                    <TextField
                        name="details"
                        variant="outlined"
                        label="Details"
                        value={postData.details}
                        onChange={(e) => setPostData({...postData, details: e.target.value})}
                    />
        
                    <TextField
                        name="tags"
                        variant="outlined"
                        label="Tags"
                        value={postData.tags}
                        onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')})}
                    />

                    <TextField
                        name="deadline"
                        variant="outlined"
                        label="Deadline"
                        value={postData.deadline}
                        onChange={(e) => setPostData({...postData, deadline: e.target.value})}
                    />

                  
                    <div className={classes.buttons}>
                        <Button className={classes.button} onClick={handleSubmit} variant="contained" color="yellow" size="large" type="submit" fullwidth>
                            Add Post
                        </Button>
                        <Button className={classes.button} variant="contained" color="secondary" size="large" type="submit" onClick={clear} fullwidth>
                            Clear
                        </Button>
                    </div>
                </form>
            </Paper>
    )
}

export default Form;

//to add the post to the database, go to api and make a post request using axios 



// <div className={classes.fileInput}>
// <FileBase 
//     type="file"
//     multiple={false}
//     onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
// />
// </div>


//style={{width: '90%'}}
