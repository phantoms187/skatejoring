const express = require('express');
const userRoutes = express.Router();
const bcrypt = require('bcrypt');

//Routes defined for the users mongoDB collection
let Users = require('./user.model');

const saltRounds = 10;

//Route to add new user to DB
userRoutes.route('/add').post((req, res) => {
    //Set new user attributes to the request body that was sent from react
    let user = new Users(req.body);
   
    //Attempt to hash password and save to DB, if successful print confirmation 
    bcrypt.hash(user.password, saltRounds, function(err, hash) {
      if(err) 
        console.log("Error Hashing" + err);
      else
      { 
        user.password = hash;
        if(user.save()) 
          res.send("New User: " + user.first_name + ", " + user.number + ", " + user.password + ",  Added");
      }
    });
});

//Route to get all users from DB
userRoutes.route('/all').get((req, res) => {
    
    //DB request to find all users
    Users.find((err, users) =>{
      if(err)
        console.log(err);
      else 
        res.json(users);
    });
});

//Route to edit a specific user
userRoutes.route('/edit/:id').get((req, res) => {
  let id = req.params.id;
  Users.findById(id, (err, user) => {
    if(err){
      console.log(err);
    }
    else {
      res.json(user);
    }
  });
});

//Route to update a specific user
userRoutes.route('/update/:id').post((req, res) => {
  //Find user by document id
    Users.findById(req.params.id, (err, user) => {
    //Check for error
    if(err){
      res.status(400);
      res.send("Error updating database");
    }
    //Make sure user exists
    else if (!user){
      res.status(404);
      res.send("Data is not found");
    }
    //Update the user info and save
    else {
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        user.number = req.body.number;
        user.email = req.body.email;

        if(user.save())
          res.send('Update complete');
      }
    });
});

//Route to delete a specific user
userRoutes.route('/delete/:id').get((req, res) => {
    Users.findByIdAndRemove({_id: req.params.id}, (err, user) =>{
        if(err){
          res.status(400);
          res.send("Error updating database");
        }
        else{
          res.status(200);
          res.send(req.params.first_name + " " + req.params.lirst_name + " deleted from database");
        } 
    });
});



module.exports = userRoutes;