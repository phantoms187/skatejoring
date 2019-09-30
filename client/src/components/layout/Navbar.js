import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";


class Navbar extends Component {
    
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
     
    loggedIn(){
  
      if (!this.props.auth.isAuthenticated) 
      {
        return(<ul class="navbar-nav float-right">
            <li class="nav-item">
                <Link to={'/register'} className="nav-link my-nav-link">Email Signup</Link>
            </li>
            
            <li class="nav-item">
                <Link to={'/login'} className="nav-link my-nav-link">Login</Link>
            </li>
        </ul>);
      }
      else
      {
        return(
            <ul class="navbar-nav float-right">
                <li class="nav-item">
                    <Link to={'/createEvent'} className="nav-link my-nav-link">Add New Event</Link>
                </li>
                <button
                    onClick={this.onLogoutClick}
                    className="btn btn-success"
                >
                Logout
                </button>
            </ul>
        );
      }
    }
    
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
          
          {this.loggedIn()}
          
          
      </nav>
    )}
  }
  
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
   { logoutUser }
)(Navbar);
