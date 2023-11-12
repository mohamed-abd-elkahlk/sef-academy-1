const apiServices = require("./servicesHandler");
const Exam = require("../modules/exam.module");

exports.createExam = apiServices.createOne(Exam);

exports.getOneExam = apiServices.getOne(Exam);

exports.getAllExam = apiServices.getAll(Exam);

exports.updateExam = apiServices.updateFunction(Exam);

exports.deleteExam = apiServices.deleteOne(Exam);
