const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InstructorSchema = new Schema {
  firstName: String,
  lastName: String,
  dob: Date,
  course: String,
  email: String
};

//INSTRUCTOR MODEL
const Instructor = mongoose.model("Instructor", InstructorSchema);

model.exports = {
  Instructor: Instructor
};
