const express = require('express');
const eventRoutes = express.Router();
const request = require('request');
//Routes defined for the Events mongoDB collection
const Events = require('../../models/Event');

const validateCreateEvent = require("../../validation/newEvent");

//Route to add new event to DB
eventRoutes.route('/add').post((req, res) => {
    //Form Validation
    const { errors, isValid } = validateCreateEvent(req.body);
    if (!isValid) {
    return res.status(400).json(errors);
    }
    //Set new event attributes to the request body that was sent from react
    let event = new Events(req.body);
    //Attempt to save to DB, if successful print confirmation
    if(event.save()) 
        res.send("New Event Added");
});

//Route to get all Events from DB
eventRoutes.route('/all').get((req, res) => {
    
    //DB request to find all Events
    Events.find((err, events) =>{
      if(err)
        console.log(err);
      else 
        res.json(events);
    });
});

//Route to edit a specific event
eventRoutes.route('/edit/:id').get((req, res) => {
  let id = req.params.id;
  Events.findById(id, (err, event) => {
    if(err){
      console.log(err);
    }
    else {
      res.json(event);
    }
  });
});

//Route to update a specific event
eventRoutes.route('/update/:id').post((req, res) => {
  //Find event by document id
    Events.findById(req.params.id, (err, event) => {
    //Check for error
    if(err){
      res.status(400);
      res.send("Error updating database");
    }
    //Make sure event exists
    else if (!event){
      res.status(404);
      res.send("Data is not found");
    }
    //Update the event info and save
    else {
        event.date = req.body.date;
        event.time = req.body.time;
        event.location = req.body.location;
        event.weather = req.body.weather;

        if(event.save())
          res.send('Update complete');
      }
    });
});

//Route to delete a specific event
eventRoutes.route('/delete/:id').get((req, res) => {
    Events.findByIdAndRemove({_id: req.params.id}, (err, event) =>{
        if(err){
          res.status(400);
          res.send("Error updating database");
        }
        else{
          res.status(200);
          res.send("Deleted from database");
        } 
    });
});

module.exports = eventRoutes;