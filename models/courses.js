const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema {
  name: String,
  instructors: [{
    type: Schema.type.ObjectId,
    ref: "Instructor"
  }],
  students: [ref: "Students"]
};
