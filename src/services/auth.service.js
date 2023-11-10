const asyncHandler = require("express-async-handler");
const { ApiError } = require("../utils");
const { verifyPasswordHash, issueJwt } = require("../utils");
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

exports.login = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ userId: req.body.userId });
  if (!user) {
    return;
    next(new ApiError("Invalid userId or password", 401));
  }
  const verifyPassword = verifyPasswordHash(
    req.body.password,
    user.salt,
    user.password
  );
  if (!verifyPassword) {
    return next(new ApiError("Incorrect userId or password", 401));
  }
  const token = issueJwt(user);
  res
    .status(200)
    .cookie("jwt", token, { sameSite: "Strict", httpOnly: true })
    .json({ data: user });
  //user.tokens.push(token )
  //await user.save()
});
exports.logout = asyncHandler(async (req, res, next) => {});
