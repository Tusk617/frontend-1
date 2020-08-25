import React from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';

import { LandingPage,
         LoginForm,
         SignUpForm,
         NavigationBar,
         TodosContainer,
         AccountPage,
         } from './components'




function App() {
  
  return (
    
    <div className="App">
      <NavigationBar />

      <Route path="home" component={LandingPage} />
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignUpForm} />
      <Route path="/agenda" component={TodosContainer} />
      <Route path="/account" component={AccountPage} />
    </div>
  );
}

export default App;
