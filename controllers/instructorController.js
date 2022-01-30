const Instructor = require('../models/Instructor.js');

const { requestValidator } = require('../utils/validatorUtil.js');

module.exports.getList = async (req, res, next) => {
  try {
    const instructors = await Instructor.find({});

    if (instructors) {
      if (instructors.length === 0) {
        throw 'empty document !.. ';
      } else {
        res.status(200).json({
          success: true,
          data: instructors,
        });
      }
    } else {
      throw 'server error';
    }
  } catch (error) {
    next(error);
  }
};
module.exports.deleteInstructor = async (req, res, next) => {
  const id =
    typeof Number.parseInt(req.params.id) === 'number' ? req.params.id : null; //target id

  try {
    if (id) {
      let deletedInstructor = await Instructor.deleteOne({
        _id: id,
      });
      if (deletedInstructor) {
        if (deletedInstructor.deletedCount === 0) {
          throw 'invalid id';
        } else {
          res.status(201).json({
            success: true,
            result: deletedInstructor,
          });
        }
      } else {
        throw 'internal server error';
      }
    } else {
      throw 'id not found !';
    }
  } catch (error) {
    next(error);
  }
};
module.exports.updateInstructor = async (req, res, next) => {
  const instructorData = req.body;
  const { id, fullName, department_id, courses } = instructorData;
  try {
    await requestValidator(req);
    //if all are ok
    let updatedInstructor = await Instructor.findByIdAndUpdate(id, {
      _id: id,
      fullName: fullName,
      department_id: department_id,
      courses: courses,
    });

    if (updatedInstructor) {
      res.status(201).json({
        success: true,
        message: updatedInstructor,
      });
    } else {
      throw 'internal server error';
    }
  } catch (error) {
    next(error);
  }
};
