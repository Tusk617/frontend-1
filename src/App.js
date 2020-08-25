
import React from 'react';
import { Route } from 'react-router-dom'

import React, {useState} from 'react';
import { Route, Link } from 'react-router-dom'

import './App.css';
import { LandingPage,
         LoginForm,
         SignUpForm,
         NavigationBar,
         TodosContainer,
         AccountPage,
         PrivateRoute
         } from './components'




function App() {
  
  return (
    
    <div className="App">
      <NavigationBar />
      <Route path="home" component={LandingPage} />
      <Route path="/login" component={() => <LoginForm/>}/>
      <Route path="/signup" component={SignUpForm} />
      <PrivateRoute path="/agenda" component={TodosContainer} />
      <PrivateRoute path="/account" component={AccountPage} />
    </div>
  );
}

export default App;
