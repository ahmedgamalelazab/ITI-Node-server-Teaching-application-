//instructor
const instructorRouter = require('express').Router();

const { body } = require('express-validator');

const {
  deleteInstructor,
  getList,
  updateInstructor,
} = require('../controllers/instructorController.js');

instructorRouter.route('/instructor/list').get(getList);
instructorRouter
  .route('/instructor/update')
  .put(
    [
      body('id').isInt().withMessage(`invalid input format`),
      body('fullName').isString().withMessage(`invalid input format`),
      body('department_id').isInt().withMessage(`invalid input format`),
      body('courses').isArray().withMessage(`invalid input format`),
    ],
    updateInstructor
  );
instructorRouter.route('/instructor/delete/:id').delete(deleteInstructor);

module.exports = instructorRouter;
