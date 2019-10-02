import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";


//Class to create a new user for email distribution
class Register extends Component {
  constructor() {
      super();
     
      //Set current state to empty
      this.state = {
          first_name: '',
          last_name: '',
          number: '',
          email: '',
          password: '',
          password2: '',
          errors: {}
      };
  }
  
 /* componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }*/
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  
 
  //When input for each is changed, set new state of variable
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  
//When the form is submitted, set object to post with axios
  onSubmit = e => {
    e.preventDefault();
    const person = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      number: this.state.number,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
  
    this.props.registerUser(person, this.props.history); 
    
  }
 //Render form for create
  render() {
    return (
        <div class="title-welcome container">
          <div class="row">
            <div class="col-md-6 col-lg-6 offset-lg-3">
              <h3>Add New User</h3>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>First Name:  </label>
                      <input
                        id = "first_name"
                        type="text"
                        className="form-control"
                        value={this.state.first_name}
                        onChange={this.onChange}
                        />
                  </div>
                  <div className="form-group">
                      <label>Last Name:  </label>
                      <input
                      id = "last_name"
                        type="text"
                        className="form-control"
                        value={this.state.last_name}
                        onChange={this.onChange}                        
                      />
                  </div>
                  <div className="form-group">
                      <label>Phone Number: </label>
                      <input
                        id = "number"
                        type="text"
                        className="form-control"
                        value={this.state.number}
                        onChange={this.onChange}
                        />
                  </div>
                  <div className="form-group">
                      <label>E-mail: </label>
                      <input
                        id = "email"
                        type="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChange}
                        />
                  </div>
                  <div className="form-group">
                      <label>Password: </label>
                      <input
                        id = "password"
                        type="password"
                        className="form-control"
                        value={this.state.password}
                        onChange={this.onChange}
                        />
                  </div>
                  <div className="form-group">
                      <label>Confirm Password: </label>
                      <input
                        id = "password2"
                        type="password"
                        className="form-control"
                        value={this.state.password2}
                        onChange={this.onChange}
                        />
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Register User" className="btn btn-primary"/>
                  </div>
                </form>
              </div>
            </div>
        </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
