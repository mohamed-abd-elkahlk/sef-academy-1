const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  language: String,
  startDate: Date,
  courseIntroduction: String,
  courseAssessment: String,
  courseMaterials: String,
  publishingDate: Date,
  duration: String,
  courseRequirements: String,
  numberOfLessons: Number,
  certificate: Boolean,
});

// TODO:  add this filed to courseScheam {level,student's,instarctor,img,students}

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
