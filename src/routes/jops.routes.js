const router = require("express").Router();

const {
  getOneJob,
  getAllJobs,
  createJob,
  deleteJob,
  updateJob,
} = require("../services/jobs.service");

const {
  createJopValidate,
  updateJopValidate,
} = require("../utils/validators/jop.validators.utiles");
const {
  mongoIdValidate,
} = require("../utils/validators/mongoId.validators.utiles");

const passport = require("passport");
// router.use(
//   passport.authenticate("jwt", {
//     session: false,
//     ignoreExpiration: false,
//     userProperty: "user",
//   })
// );
router.route("/").post(createJopValidate, createJob).get(getAllJobs);
// TODO: add uplaod files middlewer ok
router
  .route("/:id")
  .patch(updateJopValidate, updateJob)
  .delete(mongoIdValidate, deleteJob)
  .get(mongoIdValidate, getOneJob);

module.exports = router;
