module.exports.listAllStudents = async (req, res, next) => {
  const students = [
    {
      id: 1,
      firstName: 'testStudent',
      lastName: 'tempStudent',
      department: 1,
    },
    {
      id: 2,
      firstName: 'testStudent',
      lastName: 'tempStudent',
      department: 1,
    },
    {
      id: 3,
      firstName: 'testStudent',
      lastName: 'tempStudent',
      department: 2,
    },
    {
      id: 4,
      firstName: 'testStudent',
      lastName: 'tempStudent',
      department: 3,
    },
    {
      id: 5,
      firstName: 'testStudent',
      lastName: 'tempStudent',
      department: 2,
    },
    {
      id: 6,
      firstName: 'testStudent',
      lastName: 'tempStudent',
      department: 3,
    },
    {
      id: 7,
      firstName: 'testStudent',
      lastName: 'tempStudent',
      department: 2,
    },
  ];
  res.status(200).json({
    success: true,
    data: students,
  });
};
module.exports.addStudent = async (req, res, next) => {
  const studentAddedData = req.body;
  res.status(201).json({
    success: true,
    data: studentAddedData,
  });
};
module.exports.updateStudent = async (req, res, next) => {
  const updatedStudentData = req.body;
  res.status(201).json({
    success: true,
    data: updatedStudentData,
  });
};
module.exports.deleteStudent = async (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `student with id : ${id} has got deleted !`,
  });
};
