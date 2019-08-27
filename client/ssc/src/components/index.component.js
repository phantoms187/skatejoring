import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import '../App.css';
//Class to show all users
export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {users: []};
    }
    //Get the users from mongoDB
    componentDidMount(){
      axios.get('https://skatejoring-davis.herokuapp.com/users/all')
        .then(response => {
          this.setState({ users: response.data });
        })
        .catch(error => {
          console.log(error);
        });
    }
    //Create each row from the returned array of users
    tableRow(){
      return this.state.users.map((object, i) =>{
          return <TableRow obj={object} key={i} />;
      });
    }
//Render results
    render() {
      return (
        <div>
          <h3 class="title-welcome">Users</h3>
          <table className="table table-striped table-hover table-bordered my-table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tableRow() }
            </tbody>
          </table>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </div>
      );
    }
  }