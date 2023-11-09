const router = require("express").Router();
const { logout } = require("../services/auth.service");

router.post("/login", loginValidator, login);

router.post("/logout", logout);
