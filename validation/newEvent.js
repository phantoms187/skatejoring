const Validator = require("validator");
const isEmpty = require("is-empty");


module.exports = function validateRegisterInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.date = !isEmpty(data.date) ? data.date : "";
  data.time = !isEmpty(data.time) ? data.time : "";
  data.locationStreet = !isEmpty(data.locationStreet) ? data.locationStreet : "";
  data.locationCity = !isEmpty(data.locationCity) ? data.locationCity : "";
  data.locationState = !isEmpty(data.locationState) ? data.locationState : "";
  data.locationZip = !isEmpty(data.locationZip) ? data.locationZip : "";
  
  if (Validator.isEmpty(data.date)) {
    errors.name = "A date is required";
  }
  if (Validator.isEmpty(data.time)) {
    errors.name = "A time is required";
  }
  if (Validator.isEmpty(data.locationCity)) {
    errors.name = "A location is required";
  }
  if (Validator.isEmpty(data.locationState)) {
    errors.name = "A location is required";
  }
  
  
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
  