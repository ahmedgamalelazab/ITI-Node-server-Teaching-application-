const serverPort = 8080;
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

module.exports = {
  app,
  serverPort,
  morgan,
  bodyParser,
  express,
};
