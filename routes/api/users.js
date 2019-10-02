const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const key =  process.env.secretOrKey; 
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../models/User");

// @route POST api/User/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation
const { errors, isValid } = validateRegisterInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        number: req.body.number,
        email: req.body.email,
        password: req.body.password,
      });
// Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
}); 

// @route POST api/User/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.first_name
        };
    // Sign token
        jwt.sign(
          payload,
          key,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

//Route to get all User from DB
router.route('/all').get((req, res) => {

    //DB request to find all User
    User.find((err, User) =>{
      if(err)
        console.log(err);
      else
        res.json(User);
    });
});

//Route to edit a specific user
router.route('/edit/:id').get((req, res) => {
  let id = req.params.id;
  User.findById(id, (err, user) => {
    if(err){
      console.log(err);
    }
    else {
      res.json(user);
    }
  });
});

//Route to update a specific user
router.route('/update/:id').post((req, res) => {
  //Find user by document id
    User.findById(req.params.id, (err, user) => {
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
router.route('/delete/:id').get((req, res) => {
    User.findByIdAndRemove({_id: req.params.id}, (err, user) =>{
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

module.exports = router;