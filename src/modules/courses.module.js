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
  level: Number,
  status: { type: String, enum: ["ongoing", "upcoming"] },
  instructor: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  image: String,
  students: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Student",
    },
  ],
  exams: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Exam",
    },
  ],
});

// TODO:  add this filed to courseScheam {level,student's,instarctor,img,students}

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
