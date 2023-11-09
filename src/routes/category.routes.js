const router = require("express").Router();

const {
  getOneCatgory,
  getAllCatgories,
  crateCatgory,
  deleteCatgory,
  updateCatgory,
} = require("../services/category.service");

router.route("/").post(crateCatgory).get(getAllCatgories);

router
  .route("/:id")
  .put(updateCatgory)
  .delete(deleteCatgory)
  .get(getOneCatgory);

module.exports = router;
