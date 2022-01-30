//department
const departmentRouter = require('express').Router();

const {
  addDepartment,
  deleteDepartment,
  getList,
  updateDepartment,
} = require('../controllers/departmentController.js');

departmentRouter.route('/department/list').get(getList);
departmentRouter.route('/department/add').post(addDepartment);
departmentRouter.route('/department/update').put(updateDepartment);
departmentRouter.route('/department/delete/:id').delete(deleteDepartment);

module.exports = departmentRouter;
