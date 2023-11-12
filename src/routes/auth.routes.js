const router = require("express").Router();
const passport = require("passport");
const { logout, login } = require("../services/auth.service");
const {
  loginUserValidate,
} = require("../utils/validators/user.validators.utiles");
router.post("/login", loginUserValidate, login);
// router.use(
//   passport.authenticate("jwt", {
//     userProperty: "user",
//     session: false,
//     ignoreExpiration: false,
//   })
// );
router.post("/logout", logout);

module.exports = router;
