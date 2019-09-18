import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//Import the icons for DarkSky
import Skycons from 'react-skycons';

//Class to construct table entries to show events 
class EventTableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    //Function to send delete info from server
    delete() {
        axios.get('https://skatejoring-davis.herokuapp.com/events/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(error => console.log(error));
            window.location.reload();
    }
    
    render() {
        return (
            <tr>
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
              
              <td>
                <Link to={"/events"} onClick={this.delete} className="btn btn-danger">Delete</Link>
              </td>
            
            </tr>
        );
    }
}

export default EventTableRow;

