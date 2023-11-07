
const router = require("express").Router();

const {
  getOneCatgory,
  getAllCatgories,
  crateCatgory,
  deleteCatgory,
  updateCatgory
} = require("../services/category");


router.route("/").post(crateCatgory).get(getAllCatgory);

router.route("/:id").put(updateCatgory).delete(deleteCatgory).get(getOneCatgory);

module.exports = router;
