const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require("path");
const request = require('request');
const passport = require('passport');

const userRoute = require('./routes/api/users.js');
const eventRoute = require('./routes/api/events.js');

const port = process.env.PORT || 4000;
const darkSkyAPI = process.env.darkSky || '50bf69053e2a6f09b468d70eba530349' ;



//let Users = require('./user.model');
mongoose.set('useCreateIndex', true);
mongoose.connect((process.env.MONGODB_URI || 'mongodb+srv://Trip:skatejoring@skatejoring-davis-gzaon.mongodb.net/skatejoring?retryWrites=true&w=majority'), { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// Routes
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client/build')));

app.get('/weather', (req, res) => {
      request('https://api.darksky.net/forecast/' + darkSkyAPI + '/37.8267,-122.4233', function (error, response, body) {
         let newBody = JSON.parse(body);
         res.json(newBody);
     });
});

app.use('/users', userRoute);
app.use('/events', eventRoute);


app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});


app.listen(port, () =>{
  console.log('Server is running on Port:', port);
});






