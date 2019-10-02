import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment'

//Class to create a new user for weather distribution
export default class CreateEvent extends Component {
  constructor(props) {
      super(props);
      //Bind each user attribute
      this.onChangeDate = this.onChangeDate.bind(this);
      this.onChangeTime = this.onChangeTime.bind(this);
      this.onChangeLocation = this.onChangeLocation.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      //Set current state to empty
      this.state = {
          date: '',
          time: '',
          location: ''
      };
  }
  
  //When input for each is changed, set new state of variable
   onChangeDate(change) {
    this.setState({ date: change.target.value });
  }
  onChangeTime(change) {
    this.setState({ time: change.target.value });
  }
  onChangeLocation(change) {
    this.setState({ location: change.target.value });  
  }
  
  //Get weather information from DarkSky API
  componentDidMount() {
      axios.get('https://skatejoring-davis.herokuapp.com/weather')
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
  onSubmit(change) {
    change.preventDefault();
    const event = {
      date: moment(this.state.date, 'YYYY-MM-DD').format('dddd, MMMM Do YYYY'),
      time: moment(this.state.time, 'HH:mm a').format('h:mm A'),
      location: this.state.location,
      weather: this.state.weather,
      icon: this.state.icon
    };
    //Send axios post to server to handle mongoDB interaction
    axios.post('https://skatejoring-davis.herokuapp.com/events/add', event);
    //Set state back to empty to clear form
    this.setState({
      date: '',
      time: '',
      location: '',
      weather: '',
      icon: '',
    });
    //Go to index page of all events with delay for database to update first
    setTimeout(() =>{
    this.props.history.push('/events');
    },500);
     
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
                        className="form-control" 
                        value={this.state.date}
                        onChange={this.onChangeDate}
                        />
                  </div>
                  <div className="form-group">
                      <label>Time:  </label>
                      <input 
                        type="time" 
                        className="form-control" 
                        value={this.state.time}
                        onChange={this.onChangeTime}
                        />
                  </div>
                  <div className="form-group">
                      <label>Location: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.location}
                        onChange={this.onChangeLocation}
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

