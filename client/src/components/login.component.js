import React, { Component } from 'react';
//import axios from 'axios';


//Class to create a new user for email distribution
export default class Create extends Component {
  constructor(props) {
      super(props);
      //Bind each user attribute
      this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
      this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
      
      this.onSubmit = this.onSubmit.bind(this);
      //Set current state to empty
      this.state = {
          email: '',
          password: ''
      };
  }
  //When input for each is changed, set new state of variable
  
  onChangeUserEmail(change) {
    this.setState({ email: change.target.value });
  }
  onChangeUserPassword(change) {
    this.setState({ password: change.target.value });
  }
  
//When the form is submitted, set object to post with axios
  onSubmit(change) {
    change.preventDefault();
   /* const person = {
      email: this.state.email,
      password: this.state.password
    };*/
    //Send axios post to server to handle mongoDB interaction
    //axios.post('https://skatejoring-davis.herokuapp.com/users/add', person);
    //Set state back to empty to clear form
    this.setState({
      email: '',
      password: '',
    });
    //Go to index page of all users
    setTimeout(() =>{
    this.props.history.push('/index');
    },500);
     
  }
 //Render form for create 
  render() {
    return (
        <div class="title-welcome container">
          <div class="row">
            <div class="col-md-8 col-lg-6 offset-lg-3">
              <h3>Login</h3>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>E-mail: </label>
                      <input type="email" 
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeUserEmail}
                        />
                  </div>
                  <div className="form-group">
                      <label>Password: </label>
                      <input type="password" 
                        className="form-control"
                        value={this.state.password}
                        onChange={this.onChangeUserPassword}
                        />
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Log In" className="btn btn-success"/>
                  </div>
                </form>
              </div>
            </div>
        </div>
    )
  }
}
