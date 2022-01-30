//i need to connect to the user model
//then define what the type of the user and give it id
//then insert it into the db
const User = require('../models/User.js');
const Student = require('../models/Student.js');
const Instructor = require('../models/Instructor.js');

const { requestValidator } = require('../utils/validatorUtil.js');
module.exports.register = async (req, res, next) => {
  //register process will be here
  const userRegisterData = req.body;
  const {
    password,
    confirmPassword,
    userEmail,
    userID,
    userFullName,
    userType,
    department_id,
    courses,
  } = userRegisterData;
  //i need to get the data and validate it
  try {
    await requestValidator(req);
    //if there's no errors then check for the password is equals to the confirmed password ?
    if (password === confirmPassword) {
      //then the user entered all well
      let newStudent, newInstructor;
      //fill the user document
      let newUser = new User({
        userEmail: userEmail,
        password: password,
        userType: userType,
        userID: userID,
      });

      await newUser.save();

      if (userType === 'Student') {
        newStudent = new Student({
          _id: userID,
          userFullName: userFullName,
          department_id: department_id,
        });
        await newStudent.save();
        res.status(201).json({
          success: true,
          data: newStudent,
        });
      } else if (userType === 'Instructor') {
        newInstructor = new Instructor({
          _id: userID,
          fullName: userFullName,
          department_id: department_id,
          courses: courses,
        });
        await newInstructor.save();
        res.status(201).json({
          success: true,
          data: newInstructor,
        });
      } else {
        //throw error
        throw 'cannot recognize user ! .. ';
      }
    } else {
      throw 'pleas confirm ur password';
    }
  } catch (error) {
    //if an error
    console.log(error);
    next(error, req, res);
  }
};

//later on will be added hashing passwords
module.exports.login = async (req, res, next) => {
  //login process will be here
  const userRegisterData = req.body;

  const { userEmail, password } = userRegisterData;

  try {
    await requestValidator(req);
    //if all are ok
    let user = await User.findOne({
      userEmail: userEmail,
    });

    if (user) {
      //if user found
      //check the user password and the found in database
      let userPassword = user.password;
      if (userPassword === password) {
        res.status(200).json({
          success: true,
          data: user,
        });
      } else {
        throw 'invalid user email or password !';
      }
    } else {
      throw 'invalid email address';
    }
  } catch (error) {
    console.log(error);
    next(error, req, res);
  }
};
