const { check } = require("express-validator");
const {
  validatorMiddleware,
} = require("../../middlewares/validator.middleware");
const { ApiError } = require("../index");
const Job = require("../../modules/jop.module");

exports.createJopValidator = [
  check("experience").notEmpty().withMessage("exprice required"),
  check("jobId").notEmpty().isMongoId(),
  check("user").custom((val, { req }) =>
    Job.findById(req.params.jobId).then((job) => {
      job.appliedUsers.map((userId) => {
        if (userId.toString() === req.user._id.toString()) {
          throw new Error("you alredy applayed for this jop");
        }
      });
    })
  ),
  validatorMiddleware,
];
