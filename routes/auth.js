//auth routes
const { body, param, query } = require('express-validator');

const userAuth = require('express').Router();

const { login, register } = require('../controllers/authController.js');

userAuth
  .route('/auth/login')
  .post(
    [
      body('userEmail').isEmail().normalizeEmail().withMessage(`invalid email`),
      body('password').isString().withMessage('invalid input format'),
    ],
    login
  );

/**
 * ^user register Data :
 * ~ email
 * ~ password
 * ~ confirmPassword
 * ~ userID
 */
userAuth
  .route('/auth/register')
  .post(
    [
      body('userEmail').isEmail().normalizeEmail().withMessage(`invalid email`),
      body('userFullName').isString().withMessage('invalid field format'),
      body('password').isString().withMessage(`invalid password format`),
      body('confirmPassword').isString().withMessage(`invalid password format`),
      body('userID').isInt().withMessage(`invalid userID format`),
      body('userType').isString().withMessage('input format error'),
      body('department_id').isInt().withMessage('input format error'),
    ],
    register
  );

module.exports = userAuth;
