//auth routes

const userAuth = require('express').Router();

const { login, register } = require('../controllers/authController.js');

userAuth.route('/auth/login').post(login);
/**
 * ^user register Data :
 * ~ email
 * ~ password
 * ~ confirmPassword
 * ~ userID
 */
userAuth.route('/auth/register').post(register);

module.exports = userAuth;
