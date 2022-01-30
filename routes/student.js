const studentRouter = require('express').Router();

const studentsRouting = require('../middlewares/studentMiddleware.js');

const { body } = require('express-validator');

studentRouter.use('/student/', studentsRouting);

module.exports = studentRouter;
