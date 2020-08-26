import React from 'react';
import { Route } from 'react-router-dom'


import './App.css';
import { LandingPage,
         LoginForm,
         SignUpForm,
         NavigationBar,
         HomePage,
         AccountSettings,
         PrivateRoute
         } from './components'

function App() {
  

  return (
    
    <div className="App">
      <NavigationBar />
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={() => <LoginForm/>}/>
      <Route path="/signup" component={SignUpForm} />
      <PrivateRoute path="/home" component={HomePage} />
      <PrivateRoute path="/account" component={AccountSettings} />
    </div>
  );
}

export default App;
