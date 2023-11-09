const asyncHandler = require("express-async-handler");
const { ApiError } = require("../utils");
const User = require("../modules/user.module");

exports.allowedTo = (...roles) =>
  asyncHandler(async (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ApiError("You are not allowed to access this route", 403)
      );
    }
    next();
  });

exports.logout = asyncHandler(async (req, res, next) => {});
