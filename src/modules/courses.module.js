const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
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

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
