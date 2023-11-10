const router = require("express").Router();
const { logout, login } = require("../services/auth.service");

router.post("/login", loginValidator, login);
router.post("/logout", logout);
