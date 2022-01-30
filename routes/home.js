const homeRouter = require('express').Router();

const { home } = require('../controllers/homeController.js');

homeRouter.route('/home').get(home);

module.exports = homeRouter;
