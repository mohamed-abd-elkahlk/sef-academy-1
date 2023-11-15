const { check } = require("express-validator");
const {
  validatorMiddleware,
} = require("../../middlewares/validator.middleware");
const { ApiError } = require("../index");
const Job = require("../../modules/jop.module");
const JopApplication = require("../../modules/jopApplcations.module");

exports.createJopValidator = [
  check("experience").notEmpty().withMessage("exprice required"),
  check("jobId").notEmpty().isMongoId(),
  check("user")
    .custom((val, { req }) =>
      Job.findById(req.params.jobId).then((job) => {
        job.appliedUsers.map((userId) => {
          if (userId.toString() === req.user._id.toString()) {
            throw new Error("you alredy applayed for this jop");
          }
        });
      })
    )
    .custom((val, { req }) => {
      if (req.user.role === "instructor" || req.user.role === "admin") {
        throw new Error(
          "you cant preform this action onley student can do that"
        );
      }
      return true;
    }),
  validatorMiddleware,
];

exports.deleteJopValidator = [
  check("id")
    .custom((val, { req }) =>
      req.user.applyedJops.map((jobId) => {
        console.log(jobId.toString(), val);
        if (jobId.toString() !== val) {
          throw new Error("you can't preform this action");
        }
      })
    )
    .isMongoId(),
  validatorMiddleware,
];
