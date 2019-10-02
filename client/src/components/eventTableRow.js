import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//Import the icons for DarkSky
import Skycons from 'react-skycons';
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Class to construct table entries to show events 
class EventTableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    //Function to send delete info from server
    delete() {
        axios.get('https://35a7deb5f76e493e9412648419a0a663.vfs.cloud9.us-west-2.amazonaws.com/events/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(error => console.log(error));
            window.location.reload();
    }
    
   deleteButton(){
      if (this.props.auth.isAuthenticated) 
      {
        return(
          <td>
              <Link to={"/events"} onClick={this.delete} className="btn btn-danger">Delete</Link>
          </td>
        );
      }
    }
    
    render() {
        return (
            <tr>
              <td>
                {this.props.obj.name}
              </td>
              <td>
                {this.props.obj.date}
              </td>
              <td>
                {this.props.obj.time}
              </td>
              <td>
                {this.props.obj.location}
              </td>
              <td>
                {this.props.obj.weather}
              </td>
              <td>
                <Skycons color='white' icon={this.props.obj.icon} width="64" height="64" autoplay={true} />
              </td>
              {this.deleteButton()}
              
             
            
            </tr>
        );
    }
}

EventTableRow.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
)(EventTableRow);

