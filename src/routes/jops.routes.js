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

router.route("/").post(createJopValidate, createJob).get(getAllJobs);
// TODO: add uplaod files middlewer ok
router
  .route(":id")
  .put(updateJopValidate, updateJob)
  .delete(mongoIdValidate, deleteJob)
  .get(mongoIdValidate, getOneJob);
module.exports = router;
