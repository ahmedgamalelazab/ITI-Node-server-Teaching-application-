const { app, bodyParser, runServer, morgan } = require('./database/db.js');

(async () => {
  //try to run the server
  await runServer();
  //morgan middleware
  app.use(morgan('combined', {}));

  //^parsing incoming requests to json
  app.use(bodyParser.json());

  //^starting with home route if not found go next
  app.use(require('./routes/home.js'));

  //^auth middleware
  app.use(require('./routes/auth.js'));

  //^department middleware
  app.use(require('./routes/department.js'));

  //^studentMiddleware
  app.use(require('./routes/student.js'));

  //*default 404 route if no route specified
  app.use((req, res) => {
    res.send('404 NOT FOUND');
  });

  //!error middleware
  app.use((error, req, res) => {
    console.log(`server error : ${error}`);
  });
})();
