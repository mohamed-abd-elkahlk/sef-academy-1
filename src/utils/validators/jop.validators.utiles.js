const { check } = require("express-validator");

const {
  validatorMiddleware,
} = require("../../middlewares/validator.middleware");

exports.createJopValidate = [
  check("company.name").notEmpty().isString(),
  check("company.description").notEmpty().isString(),
  check("position").notEmpty().isString(),
  check("status").optional().isString().isIn(["open", "closed", "in progress"]),
  check("jobType").notEmpty().isIn(["remote", "onSite"]),
  check("location").notEmpty().isString(),
  check("salaryRange.from").notEmpty().isNumeric(),
  check("salaryRange.to").notEmpty().isNumeric(),
  check("jobDescription").notEmpty().isString(["ar-EG"]),
  check("requirements")
    .notEmpty()
    .withMessage("requirements is required")
    .isString(),
  check("skills").notEmpty().isArray(),
  validatorMiddleware,
];
exports.updateJopValidate = [
  check("company.name").optional().isString(),
  check("company.description").optional().isString(),
  check("position").optional().isString(),
  check("status").optional().isString().isIn(["open", "closed", "in progress"]),
  check("jobType").optional().isIn(["remote", "onSite"]),
  check("location").optional().isString(),
  check("salaryRange.from").optional().isNumeric(),
  check("salaryRange.to").optional().isNumeric(),
  check("jobDescription").optional().isString(["ar-EG"]),
  check("requirements").optional().isString(),
  check("skills").optional().isArray(),
  validatorMiddleware,
];
// exports.updateJopValidate = [
//   check("id").isMongoId().withMessage("Invalid id"),
//   check("company").optional().isString(),
//   check("position").optional().isString(),
//   check("status").optional().isString().isIn(["Open", "Closed", "In progress"]),
//   check("postedAt").optional().isDate(),
//   check("applicant").optional().isString(),
//   check("experience").optional().isString(),
//   check("email").optional().isEmail(),
//   check("mobileNumber").optional().isMobilePhone(["ar-EG"]),
//   check("companyName").optional().isString(),
//   check("field").optional().isString(),
//   check("location").optional().isString(),
//   check("salaryRange").optional().isString(),
//   check("currency").optional().isCurrency(),
//   check("description").optional().isString(),
//   check("requirements").optional().isString(),
//   check("skills").optional().isString(),
//   validatorMiddleware,
// ];
