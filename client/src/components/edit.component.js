import React, { Component } from 'react';
import axios from 'axios';

//Class to edit a user's info
export default class Edit extends Component {
  constructor(props) {
    super(props);
    //Bind all page attributes to current state
      this.onChangeUserFirstName = this.onChangeUserFirstName.bind(this);
      this.onChangeUserLastName = this.onChangeUserLastName.bind(this);
      this.onChangeUserNumber = this.onChangeUserNumber.bind(this);
      this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

    this.state = {
          first_name: '',
          last_name: '',
          number: '',
          email: ''
      };
  }
//Get user to edit from DB
  componentDidMount() {
      axios.get('https://skatejoring-davis.herokuapp.com/users/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                first_name: response.data.first_name, 
                last_name: response.data.last_name,
                number: response.data.number,
                email: response.data.email });
          })
          .catch((error) => {
              console.log(error);
          });
    }
//Set state for each attribute
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
//On submit sent post request to save
  onSubmit(change) {
    change.preventDefault();
    const person = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      number: this.state.number,
      email: this.state.email
    };
    axios.post('https://skatejoring-davis.herokuapp.com/users/update/'+this.props.match.params.id, person)
        .then(res => {
          res.status(200);
          res.send("User updated");
        })
        .catch(error => {
          console.log(error);
        });
    
    //Return to Index component
    this.props.history.push('/index');
    
  }
 
  render() {
    return (
    <div class="title-welcome container">
        <div class="row">
          <div class="col-md-8 col-lg-6 offset-lg-3">
            <h3>Edit User Profile</h3>
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
                      <label>Number: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.number}
                        onChange={this.onChangeUserNumber}
                        />
                  </div>
                  <div className="form-group">
                      <label>Email: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeUserEmail}
                        />
                  </div>
                  <div className="form-group">
                      <input type="submit" 
                        value="Update User" 
                        className="btn btn-primary"/>
                  </div>
              </form>
          </div>
        </div>
      </div>  
    );
  }
}