const router = require("express").Router();
const {
  createJobApplication,
  deleteJobApplication,
  getAllJobApplications,
  getOneJobApplication,
  updateJobApplication,
} = require("../services/jopApplcations.service");

const passport = require("passport");

router.use(
  passport.authenticate("jwt", {
    session: false,
    ignoreExpiration: false,
    userProperty: "user",
  })
);
router.route("/").get(getAllJobApplications);
router.route("/:jobId").post(createJobApplication);
router
  .route("/applay/:id")
  .get(getOneJobApplication)
  .delete(deleteJobApplication)
  .put(updateJobApplication);

module.exports = router;
