const router = require("express").Router();

const {
  createUser,
  deleteUser,
  getAllUsers,
  getOneUser,
  updateUser,
  disableLogedUser,
  getMe,
  updateLoggedUserDate,
  updateLoggedUserPassword,
  addUserDataMiddlewere,
} = require("../services/user.service");

const {
  createUserValidate,
  updateUserValidate,
} = require("../utils/validators/user.validators.utiles");

const {
  mongoIdValidate,
} = require("../utils/validators/mongoId.validators.utiles");
const { allowedTo } = require("../services/auth.service");

router.use(allowedTo("user"));

router.get("/me", getMe);
router.patch("/change/Password", updateLoggedUserPassword);
router.put("/update", updateLoggedUserDate);
router.delete("/delete", disableLogedUser);
// TODO: add the image middlewer
router.use(allowedTo("admin"));

router.patch(
  "/changePassword/:id",
  addUserDataMiddlewere,
  updateLoggedUserPassword
);
router
  .route("/admin")
  .get(getAllUsers)
  .post(/*uplaodUserImage, resizeImage,*/ createUserValidate, createUser);
router
  .route("/admin/:id")
  .get(getOneUser)
  .put(/*uplaodUserImage, resizeImage,*/ updateUserValidate, updateUser)
  .delete(mongoIdValidate, deleteUser);

module.exports = router;
