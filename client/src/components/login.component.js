import React, { Component } from "react";
//import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
//import classnames from "classnames";

class Login extends Component {
   constructor() {
      super();
    
      //Set current state to empty
      this.state = {
          email: '',
          password: '',
          errors: {}
      };
  }
  
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/Dashboard");
    }
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/Dashboard"); // push user to dashboard when they login
    }
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
      email: this.state.email,
      password: this.state.password
    };
   
   this.props.loginUser(person);
     
  };
 //Render form for create 
  render() {
    //const { errors } = this.state;
  
    return (
        <div class="title-welcome container">
          <div class="row">
            <div class="col-md-8 col-lg-6 offset-lg-3">
              <h3>Login</h3>
              <form noValidate onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>E-mail: </label>
                      <input 
                        type="email"
                        id = "email"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChange}
                        />
                  </div>
                  <div className="form-group">
                      <label>Password: </label>
                      <input 
                        type="password"
                        id = "password" 
                        className="form-control"
                        value={this.state.password}
                        onChange={this.onChange}
                        />
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Log In" className="btn btn-success"/>
                  </div>
                </form>
              </div>
            </div>
        </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
