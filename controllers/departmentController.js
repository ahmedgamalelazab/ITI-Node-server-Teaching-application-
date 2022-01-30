const Department = require('../models/Department.js');
const { requestValidator } = require('../utils/validatorUtil.js');

module.exports.getList = async (req, res, next) => {
  //making list Of Departments

  try {
    let departments = await Department.find({});

    if (departments) {
      if (departments.length === 0) {
        res.status(200).json({
          success: true,
          data: 'empty departments',
        });
      }
      res.status(200).json({
        success: true,
        data: departments,
      });
    } else {
      throw 'server error !';
    }
  } catch (error) {
    next(error);
  }
};
module.exports.addDepartment = async (req, res, next) => {
  const updatedDepartmentData = req.body;
  const { id, name, location } = updatedDepartmentData;
  console.log(updatedDepartmentData);
  try {
    await requestValidator(req);
    //if all are ok
    let newDepartment = new Department({
      _id: id,
      name: name,
      location: location,
    });

    await newDepartment.save();

    res.status(201).json({
      success: true,
      data: newDepartment,
    });
  } catch (error) {
    next(error);
  }
};
module.exports.updateDepartment = async (req, res, next) => {
  const updatedDepartmentData = req.body;
  const { id, name, location } = updatedDepartmentData;
  try {
    await requestValidator(req);
    //if all are ok

    let updateDepartment = await Department.findByIdAndUpdate(id, {
      name: name,
      location: location,
    });

    if (updateDepartment) {
      res.status(201).json({
        success: true,
        data: updateDepartment,
      });
    } else {
      throw 'server error';
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
module.exports.deleteDepartment = async (req, res, next) => {
  const id =
    typeof Number.parseInt(req.params.id) === 'number' ? req.params.id : null; //target id

  try {
    if (id) {
      let deletedDepartment = await Department.deleteOne({
        _id: id,
      });
      if (deletedDepartment) {
        if (deletedDepartment.deletedCount === 0) {
          throw 'invalid id';
        } else {
          res.status(201).json({
            success: true,
            result: deletedDepartment,
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
