import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todo from './reducers/index.js';
import { addTodo, toggleTodo, setVisibilityFilter } from './actions/index.js';
import App from './components/App.jsx';

let store = createStore(todo);
setInterval(() => console.log(store.getState()), 2000);

ReactDom.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
