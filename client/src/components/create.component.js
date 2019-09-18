import React, { Component } from 'react';
import axios from 'axios';


//Class to create a new user for email distribution
export default class Create extends Component {
  constructor(props) {
      super(props);
      //Bind each user attribute
      this.onChangeUserFirstName = this.onChangeUserFirstName.bind(this);
      this.onChangeUserLastName = this.onChangeUserLastName.bind(this);
      this.onChangeUserNumber = this.onChangeUserNumber.bind(this);
      this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
      this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
      this.onChangeUserPassword2 = this.onChangeUserPassword2.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      //Set current state to empty
      this.state = {
          first_name: '',
          last_name: '',
          number: '',
          email: '',
          password: '',
          password2: ''
      };
  }
  //When input for each is changed, set new state of variable
   onChangeUserFirstName(change) {
    this.setState({ first_name: change.target.value });
  }
  onChangeUserLastName(change) {
    this.setState({ last_name: change.target.value });
  }
  onChangeUserNumber(change) {
    this.setState({ number: change.target.value });
  }
  onChangeUserEmail(change) {
    this.setState({ email: change.target.value });
  }
  onChangeUserPassword(change) {
    this.setState({ password: change.target.value });
  }
  onChangeUserPassword2(change) {
    this.setState({ password2: change.target.value });
  }
//When the form is submitted, set object to post with axios
  onSubmit(change) {
    change.preventDefault();
    const person = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      number: this.state.number,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    //Send axios post to server to handle mongoDB interaction
    //axios.post('https://skatejoring-davis.herokuapp.com/users/add', person);
    //axios.post('https://projectnamenpm-username.c9users.io', person);
    axios.post('http://localhost:4000/users/add', person);  
    //Set state back to empty to clear form
    this.setState({
      first_name: '',
      last_name: '',
      number: '',
      email: '',
      password: '',
      password2: ''
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
              <h3>Add New User</h3>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>First Name:  </label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.first_name}
                        onChange={this.onChangeUserFirstName}
                        />
                  </div>
                  <div className="form-group">
                      <label>Last Name:  </label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.last_name}
                        onChange={this.onChangeUserLastName}
                        />
                  </div>
                  <div className="form-group">
                      <label>Phone Number: </label>
                      <input type="text"
                        className="form-control"
                        value={this.state.number}
                        onChange={this.onChangeUserNumber}
                        />
                  </div>
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
                      <label>Confirm Password: </label>
                      <input type="password"
                        className="form-control"
                        value={this.state.password2}
                        onChange={this.onChangeUserPassword2}
                        />
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Register User" className="btn btn-primary"/>
                  </div>
                </form>
              </div>
            </div>
        </div>
    )
  }
}
