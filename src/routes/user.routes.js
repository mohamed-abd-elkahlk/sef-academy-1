const router = require("express").Router();

router.get("/me", getMe);

router.patch("/change/Password", updateLoggedUserPassword);

router.put("/update", updateLoggedUserDate);

router.delete("/delete", disableLogedUser);

router.use(allowedTo("admin"));

router.patch("/changePassword/:id", updateLoggedUserPassword);
router
  .route("/admin")
  .get(getAllUsers)
  .post(uplaodUserImage, resizeImage, createUserValidator, createUser);
router
  .route("/admin/:id")
  .get(getOneUser)
  .put(uplaodUserImage, resizeImage, updateUserValidator, updateUser)
  .delete(deleteUserValidator, deleteUser);

module.exports = router;
