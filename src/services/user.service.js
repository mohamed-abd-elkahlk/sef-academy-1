const asyncHandler = require("express-async-handler");
const apiServices = require("./servicesHandler");
const User = require("../modules/user.module");

const { genPasswordHash, issueJwt } = require("../utils/auth");
const { ApiError } = require("../utils");
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

exports.updateLoggedUserDate = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  if (req.body.password) {
    return next(new ApiError(`you can't update password here`, 404));
  }
  const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
    new: true,
  });

  if (!updatedUser) {
    return next(new ApiError(`No user with this id: ${userId}`, 404));
  }

  res.status(200).json({ data: updatedUser });
});

exports.addUserDataMiddlewere = asyncHandler(async (req, res, next) => {
  req.params.id = req.user._id;
  next();
});

exports.updateLoggedUserPassword = asyncHandler(async (req, res, next) => {
  const id = req.user._id;
  const newPassword = genPasswordHash(req.body.password);
  const updatedData = {
    password: newPassword.hashedPassword,
    salt: newPassword.salt,
    passwordChangedAt: Date.now(),
  };

  const user = await User.findByIdAndUpdate(id, updatedData, { new: true });

  if (!user) {
    return next(new ApiError("try to log in", 404));
  }
  const token = issueJwt(user);

  res
    .status(200)
    .cookie("jwt", token, { httpOnly: true, sameSite: "strict" })
    .json({ data: user, token });
});

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
