import React, { Component } from 'react';
import axios from 'axios';
import EventTableRow from './eventTableRow';
import '../App.css';
//Class to show all events
export default class Events extends Component {
  constructor(props) {
      super(props);
      this.state = {events: []};
    }
    
    //Get the events from mongoDB
    componentDidMount(){
      axios.get('https://35a7deb5f76e493e9412648419a0a663.vfs.cloud9.us-west-2.amazonaws.com/events/all')
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

//Render results
    render() {
      return (
        <div>
          <h3 class="title-welcome">Events</h3>
          <table className="table table-striped table-hover table-bordered my-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th colSpan="2">Weather</th>
                <th>Action</th>
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