const mongoose = require("mongoose");
const Schema = mongoose.Schema;



//STUDENTS SCHEMA
const StudentSchema = new Schema ({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  passing: Boolean,
  dob: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  courses: [String]
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = {
  Student: Student
};
