import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import '../App.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";


//Class to show all users
class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {users: []};
    }
    //Get the users from mongoDB
    componentDidMount(){
      axios.get('/users/all')
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

    actionCol(){
      if (this.props.auth.isAuthenticated)
      {
        return(<th colSpan="2">Action</th>);
      }
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
                {this.actionCol()}
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
Index.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
)(Index);
