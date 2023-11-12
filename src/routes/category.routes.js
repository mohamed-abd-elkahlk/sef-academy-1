const router = require("express").Router();

const {
  getOneCatgory,
  getAllCatgories,
  crateCatgory,
  deleteCatgory,
  updateCatgory,
} = require("../services/category.service");

const {
  createCategoryValidate,
  updateCategoryValidate,
} = require("../utils/validators/category.validators.utiles");
const {
  mongoIdValidate,
} = require("../utils/validators/mongoId.validators.utiles");

const { allowedTo } = require("../services/auth.service");
// const passport = require("passport");
// router.use(
//   passport.authenticate("jwt", {
//     session: false,
//     ignoreExpiration: false,
//     userProperty: "user",
//   })
// );
// router.use(allowedTo("admin"));
router
  .route("/")
  .post(createCategoryValidate, crateCatgory)
  .get(getAllCatgories);

router
  .route("/:id")
  .put(updateCategoryValidate, updateCatgory)
  .delete(mongoIdValidate, deleteCatgory)
  .get(mongoIdValidate, getOneCatgory);

module.exports = router;
