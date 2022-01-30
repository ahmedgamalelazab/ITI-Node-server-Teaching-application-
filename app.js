const {
  app,
  bodyParser,
  runServer,
  morgan,
  express,
} = require('./database/db.js');

(async () => {
  //try to run the server
  await runServer();
  //morgan middleware
  app.use(morgan('combined', {}));

  //^parsing incoming requests to json
  app.use(express.json());

  //^starting with home route if not found go next
  app.use(require('./routes/home.js'));

  //^auth middleware
  app.use(require('./routes/auth.js'));

  //^department middleware
  app.use(require('./routes/department.js'));

  //^studentMiddleware
  app.use(require('./routes/student.js'));

  //*default 404 route if no route specified
  app.use((req, res, next) => {
    res.send('404 NOT FOUND');
  });

  app.use((error, req, res, next) => {
    res.status(404).json({
      success: false,
      message: error,
    });
  });
})();
