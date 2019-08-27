const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Events = new Schema({
  date: {
    type: String
  },
  time: {
    type: String
  },
  location: {
    type: String
  },
  weather: {
    type: String
  },
  icon: {
    type: String
  }
},{
    collection: 'events'
});

module.exports = mongoose.model('Events', Events);