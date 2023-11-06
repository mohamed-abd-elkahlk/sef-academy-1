const {
  getOneCatgory,
  getAllCatgory,
  crateCatgory,
} = require("../services/category");

const router = require("express").Router();

router.route("/").post(crateCatgory).get(getAllCatgory);

router.route("/:id").put().delete().get(getOneCatgory);

module.exports = router;
