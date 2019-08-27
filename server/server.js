const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require("path")
const request = require('request');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const userRoute = require('./user.route.js');
const eventRoute = require('./event.route.js');

const port = process.env.PORT || 4000;
const darkSkyAPI = process.env.darkSky;



let Users = require('./user.model');
mongoose.set('useCreateIndex', true);
mongoose.connect((process.env.MONGODB_URI || 'mongodb+srv://Trip:skatejoring@skatejoring-davis-gzaon.mongodb.net/test?retryWrites=true&w=majority'), { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

passport.use(new LocalStrategy(
  function(username, password, done) {
      Users.findOne({
        username: username
      }, function(err, user) {
        if (err) {return done(err);}
        else if (!user) {return done(null, false);}
        else if (user.password != password) {return done(null, false);}
        else return done(null, user);
      });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  Users.findById(id, function(err, user) {
    done(err, user);
  });
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(passport.initialize());
app.use(passport.session());

app.get('/weather', (req, res) => {
      request('https://api.darksky.net/forecast/50bf69053e2a6f09b468d70eba530349/37.8267,-122.4233', function (error, response, body) {
         let newBody = JSON.parse(body);
         res.json(newBody);
     });

});

app.use('/users', userRoute);
app.use('/events', eventRoute);



app.get('/login',
  function(req, res){
    res.send('login');
  });
  
app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});




app.listen(port, () =>{
  console.log('Server is running on Port:', port);
});





