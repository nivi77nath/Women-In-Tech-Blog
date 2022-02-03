//MAIN index.js file in React
//we've to initialize redux here

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//for redux
import {Provider} from 'react-redux'; //Provider keeps track of the store which has a global state which allows us to access the store from any component
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers'; //exported from reducers folder, index.js file

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById("root"));

