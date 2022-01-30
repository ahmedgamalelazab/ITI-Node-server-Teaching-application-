//we wanna create a user model
/*
 ^_id which is ObjectID
 ^Email which is unique
 ^Password 
 ^userType: which is enum [“Student”,”Instructor”]
 ^UserID that refers to StudentID or InstructorID
 */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  //id will be taken with default ..
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, enum: ['Student', 'Instructor'], required: true },
  userId: { type: Number, required: true }, // this will be referenced later from the Student and instructor model
});

const User = mongoose.model('user', userSchema);

module.exports = User;
