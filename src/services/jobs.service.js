const apiServices = require("./servicesHandler");
const Job = require("../modules/jop.module");

exports.getOneJob = apiServices.getOne(Job);
exports.getAllJobs = apiServices.getAll(Job);
exports.updateJob = apiServices.updateFunction(Job);
exports.deleteJob = apiServices.deleteOne(Job);
exports.createJob = apiServices.createOne(Job);
