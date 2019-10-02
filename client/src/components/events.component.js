import React, { Component } from 'react';
import axios from 'axios';
import EventTableRow from './eventTableRow';
import '../App.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";


//Class to show all events
class Events extends Component {
  constructor(props) {
      super(props);
      this.state = {events: []};
    }
    
    //Get the events from mongoDB
    componentDidMount(){
      axios.get('/events/all')
        .then(response => {
          this.setState({ events: response.data });
        })
        .catch(error => {
          console.log(error);
        });
    }
    
    //Create each row from the returned array of events
    eventTableRow(){
      return this.state.events.map((object, i) =>{
          return <EventTableRow obj={object} key={i} />;
      });
    }
    
     actionCol(){
      if (this.props.auth.isAuthenticated) 
      {
        return(<th>Action</th>);
      }
    }

//Render results
    render() {
      return (
        <div>
          <h3 class="title-welcome">Events</h3>
          <table className="table table-striped table-hover table-bordered my-table">
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th colSpan="2">Weather</th>
                {this.actionCol()}
              </tr>
            </thead>
            <tbody>
              { this.eventTableRow() }
            </tbody>
          </table>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </div>
      );
    }
  }
Events.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
)(Events);
