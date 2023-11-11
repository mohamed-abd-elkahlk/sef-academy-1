const router = require("express").Router();
const { logout, login } = require("../services/auth.service");
const {loginUserValidate} = require("../utils/validators/user.validators.utiles")
router.post("/login",loginUserValidate, login);
router.post("/logout", logout);

module.exports = router;
