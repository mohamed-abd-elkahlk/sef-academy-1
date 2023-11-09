const apiServices = require("./servicesHandler");
const Course = require("../modules/courses.module");

exports.getOneCourse = apiServices.getOne(Course);

exports.getAllCourses = apiServices.getAll(Course);

exports.updateCourse = apiServices.updateFunction(Course);

exports.deleteCourse = apiServices.deleteOne(Course);

exports.createCourse = apiServices.createOne(Course);
