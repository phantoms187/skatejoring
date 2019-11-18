const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require("path");
const request = require('request');
const passport = require('passport');
var moment = require('moment');

const userRoute = require('./routes/api/users.js');
const eventRoute = require('./routes/api/events.js');

const port = process.env.PORT || 4000;
const darkSkyAPI = process.env.darkSky;// || require("./config/keys").darkSkyAPI ;

var NodeGeocoder = require('node-geocoder');
var options = {
  provider: 'opencage',
  apiKey: process.env.openCageAPI// require("./config/keys").openCageAPI || process.env.openCageAPI // for Mapquest, OpenCage, Google Premier
};
var geocoder = NodeGeocoder(options);

const db = process.env.openCageAPI;//require("./config/keys").mongoURI;
mongoose.set('useCreateIndex', true);
mongoose.connect((process.env.MONGODB_URI || db), { useNewUrlParser: true }).then(
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
app.use(express.static(path.join(__dirname, 'client/build')));


app.post('/weather', (req, res) => {
     
    let lat = '';
    let long = '';
    let place = req.body.street + " " + req.body.city + ", " + req.body.state + " " + req.body.zip;
    let time = moment(req.body.date + " " + req.body.time, 'dddd, MMMM Do YYYY h:mm A').unix();
    
    function getCoordinates(place) { 
        return new Promise((resolve, reject) => {
            geocoder.geocode(place, function(err,res) {
                if(err)
                    reject(err);
                else
                    resolve(res);
                });
        });
    }
    
    (async () => {
      const geoCoordinates = await getCoordinates(place);
        lat = geoCoordinates[0].latitude;
        long = geoCoordinates[0].longitude;
        request('https://api.darksky.net/forecast/' + darkSkyAPI + '/' + lat +',' + long + ',' + time, function (error, response, body) {
            const newBody = JSON.parse(body);
            res.json(newBody);
        });
        lat = '';
        long = '';
    })();
});

app.use('/users', userRoute);
app.use('/events', eventRoute);
   

    app.get("/*", (req, res) => {
        res.sendFile(path.join(__dirname, './client/build/index.html'));
});



app.listen(port, () =>{
  console.log('Server is running on Port:', port);
});






