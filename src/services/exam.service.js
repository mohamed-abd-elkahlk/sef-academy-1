const apiServices = require("./servicesHandler");
const Exam = require("../modules/exam.module");
const Course = require("../modules/courses.module");
const asyncHandler = require("express-async-handler");
const { ApiError } = require("../utils");

exports.createExam = asyncHandler(async (req, res, next) => {
  const exam = await Exam.create(req.body);

  await Course.findByIdAndUpdate(exam.course, {
    $addToSet: {
      exams: exam._id,
    },
  });
  res.status(201).json({ exam });
});

exports.getOneExam = apiServices.getOne(Exam);

exports.getAllExam = apiServices.getAll(Exam);

exports.updateExam = apiServices.updateFunction(Exam);

exports.deleteExam = asyncHandler(async (req, res, next) => {
  const exam = await Exam.findByIdAndDelete(req.params.id);
  if (!exam) {
    return next(new ApiError("error while deleting the exam", 400));
  }
  await Course.findByIdAndUpdate(exam.course, {
    $pull: {
      exams: exam._id,
    },
  });
  res.status(204).json({});
});
