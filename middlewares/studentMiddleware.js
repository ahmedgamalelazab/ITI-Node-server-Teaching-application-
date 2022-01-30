const studentsRouting = require('express').Router();
const {
  addStudent,
  deleteStudent,
  listAllStudents,
  updateStudent,
} = require('../controllers/studentController.js');

const { body } = require('express-validator');

studentsRouting.route('/listAll').get(listAllStudents);
studentsRouting
  .route('/updateStudent')
  .put(
    [
      body('id').isInt().withMessage('invalid input format'),
      body('userFullName').isString().withMessage('invalid input format'),
      body('department_id').isInt().withMessage('invalid input format'),
    ],
    updateStudent
  );
studentsRouting.route('/delete/:id').delete(deleteStudent);

module.exports = studentsRouting;
