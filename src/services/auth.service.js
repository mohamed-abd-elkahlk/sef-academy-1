const asyncHandler = require("express-async-handler");
const Blacklist  = require("../modules/Blacklist.module")
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
    return next(new ApiError("Invalid userId or password", 401));
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

// exports.logout = asyncHandler(async (req, res, next) => {
//   res.clearCookie('jwt'); 
//   res.status(200).json({ message: 'Logout successful' });
// });
// TODO: add logout function
exports.logout = asyncHandler(async (req, res, next) => {
  try {
    const authHeader = req.headers['cookie']; 
    if (!authHeader) return res.sendStatus(204); 
    const cookie = authHeader.split('=')[1]; 
    const accessToken = cookie.split(';')[0];
    const checkIfBlacklisted = await Blacklist.findOne({ token: accessToken }); 
    if (checkIfBlacklisted) return res.sendStatus(204);
    const newBlacklist = new Blacklist({
      token: accessToken,
    });
    await newBlacklist.save();
    res.setHeader('Clear-Site-Data', '"cookies"');
    res.status(200).json({ message: 'You are logged out!' });
  } catch (err) {
    return next(new ApiError("Internal Server Error",'error' ));
  }
  res.end();
});
