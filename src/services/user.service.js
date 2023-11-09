const apiServices = require("./servicesHandler");
const User = require("../modules/user.module");
//! admin services
exports.getOneUser = apiServices.getOne(User);
exports.getAllUsers = apiServices.getAll(User);
exports.updateUser = apiServices.updateFunction(User);
exports.deleteUser = apiServices.deleteOne(User);
exports.createUser = apiServices.createOne(User);

//! normal user services

exports.getMe = asyncHandler(async (req, res, next) => {});

exports.updateLoggedUserDate = asyncHandler(async (req, res) => {});

exports.addUserDataMiddlewere = asyncHandler(async (req, res, next) => {
  req.params.id = req.user._id;
  next();
});

exports.updateLoggedUserPassword = asyncHandler(async (req, res, next) => {});

exports.disableLogedUser = asyncHandler(async (req, res) => {});
