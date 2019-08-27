const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
  password2: {
    type: String,
    required: true
  }
},{
    collection: 'users',
    timestamps: true
});
/*
Users.pre('save', function(next) {
  // Check if document is new or a new password has been set
  if (this.isNew || this.isModified('password')) {
    // Saving reference to this because of changing scopes
    const document = this;
    bcrypt.hash(document.password, saltRounds,
      function(err, hashedPassword) {
      if (err) {
        next(err);
      }
      else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});*/

module.exports = mongoose.model('Users', Users);