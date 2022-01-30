module.exports.getList = async (req, res, next) => {
  //making list Of Departments
  const listOfDepartments = [
    {
      id: 1,
      name: 'PD',
      location: 'Alexandria',
    },
    {
      id: 2,
      name: 'SD',
      location: 'Alexandria',
    },
    {
      id: 3,
      name: 'Security',
      location: 'Cairo',
    },
    {
      id: 4,
      name: 'Testing',
      location: 'Alexandria',
    },
  ];

  res.status(200).json({
    success: true,
    data: listOfDepartments,
  });
};
module.exports.addDepartment = async (req, res, next) => {
  const updatedDepartmentData = req.body;
  res.status(201).json({
    success: true,
    data: updatedDepartmentData,
  });
};
module.exports.updateDepartment = async (req, res, next) => {
  //updating departmentData based on it's id
  const departmentId = req.id;
  console.log(departmentId);
  const updatedDepartmentData = req.body;
  res.status(201).json({
    success: true,
    departmentID: departmentId,
    data: updatedDepartmentData,
  });
};
module.exports.deleteDepartment = async (req, res, next) => {
  const id = req.params.id; //target id
  res.status(201).json({
    success: true,
    message: `department with id : ${id} has got deleted !`,
  });
};
