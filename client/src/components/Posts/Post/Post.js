//Only the posts component needs the post component, hence, it is created inside the Posts folder

import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './stylesPost';
import {useDispatch} from 'react-redux'; //this hook returns a reference to the dispatch function from the redux store. you may use it to dispatch actions as needed

import { deletePost, likePost } from '../../../actions/posts';

//card may need img bg, implement usinb base64 soon
function Post({post, setCurrentId}) {
    
    const dispatch = useDispatch();
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} title={post.title} image="https://source.unsplash.com/random"/>
            
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>

            <div className={classes.overlay2}>
                <Button 
                    style={{color: 'white'}} 
                    size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>

            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>

            <Typography className={classes.title} variant="h5" gutterbottom>{post.title}</Typography>
            <CardContent>
                <Typography  variant="body2" color="textSecondary" gutterbottom>{post.details}</Typography>
                <Typography  variant="body4" gutterbottom>{post.deadline}</Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize="small"/>
                    &nbsp; Like &nbsp; 
                    {post.likeCount}
                    {<post className="likeCount"></post>}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                    {<post className="likeCount"></post>}
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post;
