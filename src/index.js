import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import configureStore from './configureStore';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {App} from './components/App'
import initialState from './initialState'
//import allReducers from './reducers';

const store = configureStore(initialState);


window.React = React;
window.store = store;

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
    document.getElementById('react-container')
);