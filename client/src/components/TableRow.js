import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Class to construct table entries to show users in DB
class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    //Function to send delete info from server
    delete() {
        axios.get('/users/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(error => console.log(error));
            window.location.reload();
    }
    
    editButton(){
      if (this.props.auth.isAuthenticated) 
      {
        return(
          <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
        );
      }
    }
    
    deleteButton(){
      if (this.props.auth.isAuthenticated) 
      {
        return(
          <td>
            <Link to={"/index"} onClick={this.delete} className="btn btn-danger">Delete</Link>
          </td>
        );
      }
    }
    
    
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.first_name}
          </td>
          <td>
            {this.props.obj.last_name}
          </td>
          <td>
            {this.props.obj.number}
          </td>
          <td>
            {this.props.obj.email}
          </td>
            {this.editButton()}
            {this.deleteButton()}
          
        </tr>
    );
  }
}

TableRow.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
)(TableRow);

