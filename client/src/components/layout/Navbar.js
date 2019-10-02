import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (

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
    );
  }
}
export default Navbar;
