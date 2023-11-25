const router = require("express").Router();

const passport = require("passport");
const { allowedTo } = require("../services/auth.service");
const {
  getOneCourse,
  getAllCourses,
  createCourse,
  deleteCourse,
  updateCourse,
} = require("../services/course.service");
router.use(
  passport.authenticate("jwt", {
    session: false,
    ignoreExpiration: false,
    userProperty: "user",
  }),
  allowedTo("instructor")
);
router.route("/").post(createCourse).get(getAllCourses);

router.route("/:id").put(updateCourse).delete(deleteCourse).get(getOneCourse);

module.exports = router;
