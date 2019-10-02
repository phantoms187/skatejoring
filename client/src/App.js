import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import Register from './components/register.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import Home from './components/home.component';
import Events from './components/events.component';
import CreateEvent from './components/eventCreate.component';
import Login from './components/login.component';
import Navbar from "./components/layout/Navbar";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}




class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container green-bkgr">
         <Navbar />
          <br/>
          <br/>
          <br/>
            <h2 class= "title-welcome">Skatejoring Social Club</h2>
          <br/>
            
            <Route exact path='/login' component={ Login } />
            <Route exact path='/events' component={ Events } />
            <Route exact path='/register' component={ Register } />
            <Route exact path='/index' component={ Index } />
            <Route path='/edit/:id' component={ Edit } />
            
            <Switch>
              <PrivateRoute> 
                <PrivateRoute exact path='/dashboard' component={ Dashboard } />
                <PrivateRoute exact path='/createEvent' component={ CreateEvent } />
              </PrivateRoute>
            </Switch>
            
            <Route exact path='/' component={ Home } />
            
            <footer class="container">
              <p class="text-white">&copy; 2019 DW Designs         <a href="https://darksky.net/poweredby/"> Powered by Dark Sky</a></p>
            </footer>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          </div>
        </Router>
      </Provider>

    );
  }
}

export default App;
