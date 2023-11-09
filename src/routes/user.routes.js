const router = require("express").Router();

router.get("/getme", getMe);

router.patch("/change/Password", updateLoggedUserPassword);

router.put("/update", getLoggedUserData, updateLoggedUserDate);

router.delete("/delete", disableLogedUser);
