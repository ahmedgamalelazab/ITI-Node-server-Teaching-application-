//we wanna create a user model
/*
 ^_id which is Number
 ^ Name and should be unique
 ^ location 
 */

const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  //id will be taken with default ..
  _id: { type: Number, required: true },
  name: { type: String, required: true },
  location: { type: String },
});

module.exports = mongoose.model('department', departmentSchema);
