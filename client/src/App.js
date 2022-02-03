import React, {useState} from 'react';
import {Container, AppBar, Typography,Button, Grow, Grid} from '@material-ui/core'; //Grid is used for a simple animation. you may not need it
import Hero from './components/Hero/Hero.js';
import Header from './components/Header/Header.js';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import './styles.scss';

//to dispatch getPost action, import a react hook
import { useDispatch } from 'react-redux'; 
import { useEffect } from 'react'; //defines where we've to dispatch the action
import { getPosts } from './actions/posts';

function App() {

  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(getPosts());
  }, [currentId, dispatch])

  return(
    <div className="body">
    
        <Header />
        <Hero/>
        <Posts setCurrentId={setCurrentId} />
        <Form currentId={currentId} setCurrentId={setCurrentId} />
    </div>
  );
}

export default App;
