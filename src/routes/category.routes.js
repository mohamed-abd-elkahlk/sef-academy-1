const router = require("express").Router();

const {
  getOneCatgory,
  getAllCatgories,
  crateCatgory,
  deleteCatgory,
  updateCatgory,
} = require("../services/category.service");

const { allowedTo } = require("../services/auth.service");
const passport = require("passport");

passport.authenticate("jwt", {
  session: false,
  ingnoreEpiration: false,
  userProperty: "user",
});

router.use(allowedTo("admin"));
router.route("/").post(crateCatgory).get(getAllCatgories);

router
  .route("/:id")
  .put(updateCatgory)
  .delete(deleteCatgory)
  .get(getOneCatgory);

module.exports = router;
