const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Users = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  number: {
    type: String
  },
  email: {
    type: String,
    required: true, 
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  
},{
    collection: 'users',
    timestamps: true
});

module.exports = mongoose.model('Users', Users);