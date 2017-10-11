const db = require("../models/student");

//ROUTES
function getStudents(req, res){
  res.send("ALL STUDENTS SHOWN HERE")
};

function getOneStudent(req, res){
  db.Student.findOne({_id: req.params.id}, function(err, studentData){
    var courseArray = studentData.courses
    var courseId = courseArray[0]
    db.Course.findOne({_id: courseId}, function(err, courseData){
      
    })
  })
};

function createOneStudent(req, res){
  res.send("ONE STUDENT CREATED")
};

function updateStudent(req, res){
  res.send("ONE STUDENT UPDATED")
};

function removeStudent(req, res){
  res.status(204)
};

//MODULE EXPORTS
module.exports = {
  getStudents: getStudents,
  getOneStudent: getOneStudent,
  createOneStudent: createOneStudent,
  updateStudent: updateStudent,
  removeStudent: removeStudent
}
