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
const darkSkyAPI = process.env.darkSky || '50bf69053e2a6f09b468d70eba530349' ;

var NodeGeocoder = require('node-geocoder');
var options = {
  provider: 'opencage',
  apiKey: '464ba334d812473fa18bc2b34e8ad854' // for Mapquest, OpenCage, Google Premier
};
var geocoder = NodeGeocoder(options);



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

app.post('/weather', (req, res) => {
     
    let lat = '';
    let long = '';
    let place = req.body.street + " " + req.body.city + ", " + req.body.state;
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
        console.log(lat + " %^& " + long);
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






