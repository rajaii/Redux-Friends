import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';

import App from './App';
import rootReducer from './reducers';
import './index.css';


const store = createStore(rootReducer, applyMiddleware(thunk, logger));


ReactDOM.render(
<Provider store={store}>
<Router>
<App />
</Router>
</Provider>, document.getElementById('root'));


