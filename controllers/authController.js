module.exports.register = async (req, res, next) => {
  //register process will be here
  const userRegisterData = req.body;
  res.status(201).json({
    success: true,
    data: userRegisterData,
  });
};

module.exports.login = async (req, res, next) => {
  //login process will be here
  const userRegisterData = req.body;
  res.status(200).json({
    success: true,
    data: userRegisterData,
  });
};
