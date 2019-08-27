import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import Home from './components/home.component';
import Events from './components/events.component';
import CreateEvent from './components/eventCreate.component';
import Login from './components/login.component';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container green-bkgr">
          <nav class="navbar navbar-expand-md navbar-dark bg-dark nav-bkgr">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <Link to={'/'} className="nav-link my-nav-link">Skatejoring</Link>
                </li>
                <li class="nav-item my-nav-link">
                   <Link to={'/index'} className="nav-link ">Users</Link>
                </li>
                <li class="nav-item my-nav-link">
                   <Link to={'/events'} className="nav-link ">Events</Link>
                </li>
              </ul>
              <ul class="navbar-nav float-right">
                 <li class="nav-item">
                    <Link to={'/create'} className="nav-link my-nav-link">Email Signup</Link>
                </li>
                <li class="nav-item">
                    <Link to={'/createEvent'} className="nav-link my-nav-link">Add New Event</Link>
                </li>
                <li class="nav-item">
                    <Link to={'/login'} className="nav-link my-nav-link">Login</Link>
                </li>
              </ul>
          </nav>
        <br/>
        <br/>
        <br/>
          <h2 class= "title-welcome">Skatejoring Social Club</h2> 
        <br/>
          <Switch>
              <Route exact path='/login' component={ Login } />
              <Route exact path='/events' component={ Events } />
              <Route exact path='/createEvent' component={ CreateEvent } />
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
              <Route path='/' component={ Home } />
          </Switch>
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
    );
  }
}

export default App;