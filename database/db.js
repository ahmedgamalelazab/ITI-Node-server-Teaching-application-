const { app, bodyParser, morgan, serverPort } = require('../src/server.js');

const mongoose = require('mongoose');

async function runServer() {
  try {
    const connection = await mongoose.connect(
      'mongodb://localhost:27017/ITINodeDayTwo'
    );
    console.log('connected to data base successfully !');
    //if no problems
    app.listen(serverPort, () => {
      console.log(`server running and listening on port ${serverPort} ! ...`);
    });
  } catch (error) {
    console.log(error);
    console.log(`cannot connect to the data base ! ..`);
  }
}
module.exports = {
  runServer,
  app,
  bodyParser,
  morgan,
  serverPort,
};
