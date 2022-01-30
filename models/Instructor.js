//we wanna create a user model
/*
 ^  _id which is number
 ^  fullName 
 ^  Department that refers to departmentID
 ^  UserID that refers to StudentID or InstructorID
 ^  courses
 */

const mongoose = require('mongoose');

const InstructorSchema = new mongoose.Schema({
  //id will be taken with default ..
  _id: { type: Number, required: true, unique: true, refPath: 'user' }, // unique
  fullName: { type: String, required: true },
  department_id: { type: Number, required: true, ref: 'department' }, // this will be referencing the department document
  courses: { type: Array, required: true },
});

const Instructor = mongoose.model('instructor', InstructorSchema);

module.exports = Instructor;
