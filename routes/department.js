//department
const departmentRouter = require('express').Router();

const { body } = require('express-validator');

const {
  addDepartment,
  deleteDepartment,
  getList,
  updateDepartment,
} = require('../controllers/departmentController.js');

departmentRouter.route('/department/list').get(getList);
departmentRouter
  .route('/department/add')
  .post(
    [
      body('id').isInt().withMessage('invalid input format'),
      body('name').isString().withMessage('invalid input format'),
      body('location').isString().withMessage('invalid input format'),
    ],
    addDepartment
  );
departmentRouter
  .route('/department/update')
  .put(
    [
      body('id').isInt().withMessage('invalid input format'),
      body('name').isString().withMessage('invalid input format'),
      body('location').isString().withMessage('invalid input format'),
    ],
    updateDepartment
  );
departmentRouter.route('/department/delete/:id').delete(deleteDepartment);

module.exports = departmentRouter;
