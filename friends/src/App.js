import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './PrivateRoute.js';



function App(props) {
  return (
    <div className="App">
      <Route exact path='/' render={(props) => <Login {...props} />} />
      <PrivateRoute exact path='/friendslist' component={FriendsList}  /> 
    </div>
  );
}

export default App;
