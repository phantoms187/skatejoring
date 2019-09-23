const Validator = require("validator");
const isEmpty = require("is-empty");


module.exports = function validateRegisterInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.date = !isEmpty(data.first_name) ? data.first_name : "";
  data.time = !isEmpty(data.last_name) ? data.last_name : "";
  data.location = !isEmpty(data.number) ? data.number : "";
  
  if (Validator.isEmpty(data.date)) {
    errors.name = "A date is required";
  }
  if (Validator.isEmpty(data.time)) {
    errors.name = "A time is required";
  }
  if (Validator.isEmpty(data.location)) {
    errors.name = "A location is required";
  }
  
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
  