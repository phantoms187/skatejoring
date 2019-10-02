const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Events = new Schema({
  name: {
    type: String
  },
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
    collection: 'events',
    timestamps: true
});

module.exports = mongoose.model('Events', Events);