import React from 'react'
import Post from './Post/Post';
import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from './stylesPosts';

//To fetch data from the global redux store
import {useSelector} from 'react-redux';

function Posts({ setCurrentId }) {

    const classes = useStyles();
    const posts = useSelector((state) => state.posts); //we know it's called posts from the reducers folder, index.js file, combineReducers func.

    return (
        !posts.length ? <CircularProgress/> : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={12}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts
