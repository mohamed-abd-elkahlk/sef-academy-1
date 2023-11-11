const asyncHandler = require("express-async-handler");
const apiServices = require("./servicesHandler");
const User = require("../modules/user.module");
//! admin services
exports.getOneUser = apiServices.getOne(User);
exports.getAllUsers = apiServices.getAll(User);
exports.updateUser = apiServices.updateFunction(User);
exports.deleteUser = apiServices.deleteOne(User);
exports.createUser = apiServices.createOne(User);

//! normal user services

exports.getMe = asyncHandler(async (req, res, next) => {
  const id = req.user_id;
  const user = await User.findById(id);
  if (!user) {
    return next(ApiError(`try to login to show your data: `, 404));
  }
  res.status(200).json({ data: user });
});

exports.updateLoggedUserDate = asyncHandler(async (req, res) => {});

exports.addUserDataMiddlewere = asyncHandler(async (req, res, next) => {
  req.params.id = req.user._id;
  next();
});

exports.updateLoggedUserPassword = asyncHandler(async (req, res, next) => {});

exports.disableLogedUser = asyncHandler(async (req, res) => {
  req.params.id = req.user._id;
  await User.findByIdAndUpdate(req.user._id, { active: false });
  res
    .status(200)
    .json({
      success: true,
      message: "Your account has been disabled",
    })
    .clearCookie("jwt");
});
