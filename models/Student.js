//we wanna create a user model
/*
 ^ _id which is number
 ^ fullName 
 ^ Department that refers to departmentID
 ^UserID that refers to StudentID or InstructorID
 */

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  //id will be taken with default ..
  _id: { type: Number, required: true, unique: true, ref: 'user' }, // unique
  fullName: { type: String, required: true },
  department_id: { type: Number, required: true, ref: 'department' }, // this will be referencing the department document
});

const Student = mongoose.model('student', studentSchema);

module.exports = Student;
