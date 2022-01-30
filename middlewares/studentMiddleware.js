const studentsRouting = require('express').Router();
const {
  addStudent,
  deleteStudent,
  listAllStudents,
  updateStudent,
} = require('../controllers/studentController.js');

studentsRouting.route('/listAll').get(listAllStudents);
studentsRouting.route('/addStudent').post(addStudent);
studentsRouting.route('/updateStudent').put(updateStudent);
studentsRouting.route('/delete/:id').delete(deleteStudent);

module.exports = studentsRouting;
