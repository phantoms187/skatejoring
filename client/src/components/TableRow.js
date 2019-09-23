import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//Class to construct table entries to show users in DB
class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    //Function to send delete info from server
    delete() {
        axios.get('https://35a7deb5f76e493e9412648419a0a663.vfs.cloud9.us-west-2.amazonaws.com/users/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(error => console.log(error));
            window.location.reload();
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
          <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <Link to={"/index"} onClick={this.delete} className="btn btn-danger">Delete</Link>
          </td>
        </tr>
    );
  }
}

export default TableRow;

