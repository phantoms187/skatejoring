import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEvent } from "../actions/eventActions";
import { Link, withRouter } from "react-router-dom";


//Class to create a new user for weather distribution
class CreateEvent extends Component {
  constructor() {
      super();
      
      //Set current state to empty
      this.state = {
          date: '',
          time: '',
          location: '',
          errors: {}
      };
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  
  //When input for each is changed, set new state of variable
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  }
  
  
  //Get weather information from DarkSky API
  componentDidMount() {
      axios.get('https://35a7deb5f76e493e9412648419a0a663.vfs.cloud9.us-west-2.amazonaws.com/weather')
          .then(response => {
              this.setState({ 
                    weather: response.data.currently.summary, 
                    icon: (response.data.currently.icon).toUpperCase().replace(/-/g,'_'),
                });
          })
          .catch((error) => {
              console.log(error);
          });
    }
 
//When the form is submitted, set object to post with axios
  onSubmit = e => {
    e.preventDefault();
    const event = {
      date: moment(this.state.date, 'YYYY-MM-DD').format('dddd, MMMM Do YYYY'),
      time: moment(this.state.time, 'HH:mm a').format('h:mm A'),
      location: this.state.location,
      weather: this.state.weather,
      icon: this.state.icon
    };
   
   this.props.addEvent(event, this.props.history);
  }
 //Render form for create 
  render() {
    return (
        <div class="title-welcome container">
          <div class="row">
            <div class="col-md-8 col-lg-6 offset-lg-3">
              <h3>Add New Event</h3>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Date:  </label>
                      <input 
                        type="date"
                        id = "date"
                        className="form-control" 
                        value={this.state.date}
                        onChange={this.onChange}
                        />
                  </div>
                  <div className="form-group">
                      <label>Time:  </label>
                      <input 
                        type="time" 
                        id = "time"
                        className="form-control" 
                        value={this.state.time}
                        onChange={this.onChange}
                        />
                  </div>
                  <div className="form-group">
                      <label>Location: </label>
                      <input 
                        type="text"
                        id = "location"
                        className="form-control"
                        value={this.state.location}
                        onChange={this.onChange}
                        />
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Register Event" className="btn btn-primary"/>
                  </div>
                </form>
              </div>
            </div>
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

CreateEvent.propTypes = {
  addEvent: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addEvent }
)(withRouter(CreateEvent));

