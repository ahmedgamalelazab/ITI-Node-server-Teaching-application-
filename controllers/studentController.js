const Student = require('../models/Student.js');
const { requestValidator } = require('../utils/validatorUtil.js');

module.exports.listAllStudents = async (req, res, next) => {
  //list all the students will fetch all the students from the db

  try {
    const students = await Student.find({});

    if (students) {
      res.status(200).json({
        success: true,
        data: students,
      });
    } else {
      throw 'server error !';
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

/*
//~no more add students because it's already handled in the register
module.exports.addStudent = async (req, res, next) => {
  const studentAddedData = req.body;
  res.status(201).json({
    success: true,
    data: studentAddedData,
  });
};
*/

module.exports.updateStudent = async (req, res, next) => {
  const updatedStudentData = req.body;
  const { id, userFullName, department_id } = updatedStudentData;
  try {
    await requestValidator(req);
    //if all are ok

    let updateStudent = await Student.findByIdAndUpdate(id, {
      $set: {
        _id: id,
        userFullName: userFullName,
        department_id: department_id,
      },
    });

    if (updateStudent) {
      res.status(201).json({
        success: true,
        data: updateStudent,
      });
    } else {
      throw 'invalid id';
    }
  } catch (error) {
    next(error);
  }
};
module.exports.deleteStudent = async (req, res, next) => {
  const id =
    typeof Number.parseFloat(req.params.id) === 'number' ? req.params.id : null;
  console.log(typeof req.params.id);
  try {
    if (id) {
      let deleteUser = await Student.deleteOne({
        _id: id,
      });

      if (deleteUser) {
        res.status(200).json({
          result: deleteUser,
          message: `student with id : ${id} has got deleted !`,
        });
      } else {
        throw 'server error';
      }
    } else {
      throw 'invalid student id';
    }
  } catch (error) {
    next(error);
  }
};
