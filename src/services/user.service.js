const apiServices = require("./servicesHandler");
const User = require("../modules/user.module");

exports.getOneUser = apiServices.getOne(User);
exports.getAllUsers = apiServices.getAll(User);
exports.updateUser = apiServices.updateFunction(User);
exports.deleteUser = apiServices.deleteOne(User);
exports.createUser = apiServices.createOne(User);
