const router = require("express").Router();

router.post("/login", loginValidator, login);

router.post("/logout", logout);
