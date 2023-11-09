const router = require("express").Router();

const {
  getOneCourse,
  getAllCourses,
  createCourse,
  deleteCourse,
  updateCourse,
} = require("../services/course.service");

router.route("/").post(createCourse).get(getAllCourses);

router.route("/:id").put(updateCourse).delete(deleteCourse).get(getOneCourse);

module.exports = router;
