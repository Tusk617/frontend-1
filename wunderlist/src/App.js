import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from './components/Signup'
import Login from './components/Login'
import PrivateRoute from './utils/PrivateRoute'
import Header from './components/Header'
import List from './components/List'

import './App.css';

function App() {
  return (
    <div className="App">
      Wunderlist
      <Router>
        <Header />
        <Switch>
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <PrivateRoute  path='/wunderlist' component={List} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
