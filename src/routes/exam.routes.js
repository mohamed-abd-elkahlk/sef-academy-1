const router = require("express").Router();
const {
  createExam,
  deleteExam,
  getAllExam,
  getOneExam,
  updateExam,
} = require("../services/exam.service");

router.route("/").get(getAllExam).post(createExam);
router.route("/:id").get(getOneExam).delete(deleteExam).put(updateExam);

module.exports = router;
