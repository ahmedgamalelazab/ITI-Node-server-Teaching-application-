const { validationResult } = require('express-validator');

module.exports.requestValidator = async function (req) {
  return new Promise((resolve, reject) => {
    let errorMessage = '';
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      errors.array().forEach(error => {
        errorMessage += error.msg + ' ,';
      });
      reject({
        error: true,
        errorMessage: errorMessage,
      });
    } else {
      resolve({
        success: true,
        message: 'req params valid',
      });
    }
  });
};
