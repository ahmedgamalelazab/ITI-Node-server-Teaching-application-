const studentRouter = require('express').Router();

const studentsRouting = require('../middlewares/studentMiddleware.js');

studentRouter.use('/student/', studentsRouting);

module.exports = studentRouter;
