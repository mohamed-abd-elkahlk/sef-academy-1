const { check } = require("express-validator");

const {
  validatorMiddleware,
} = require("../../middlewares/validator.middleware");
const ApiError = require("../index");

const Category = require("../../modules/category.module");

exports.createJopValidate = [
  check("company").optional().isString(),
  check("position").optional().isString(),
  check("status").optional().isString().isIn(["Open", "Closed", "In progress"]),
  check("postedAt").optional().isDate(),
  check("applicant").optional().isString(),
  check("experience").optional().isString(),
  check("email").optional().isEmail(),
  check("mobileNumber").optional().isMobilePhone(["ar-EG"]),
  check("companyName")
    .notEmpty()
    .withMessage("Company name is required")
    .isString(),
  check("field").optional().isString(),
  check("location").optional().isString(),
  check("salaryRange").optional().isString(),
  check("currency").optional().isCurrency(),
  check("description").optional().isString(),
  check("requirements").optional().isString(),
  check("skills").optional().isString(),
  validatorMiddleware,
];
exports.updateJopValidate = [
  check("id").isMongoId().withMessage("Invalid id"),
  check("company").optional().isString(),
  check("position").optional().isString(),
  check("status").optional().isString().isIn(["Open", "Closed", "In progress"]),
  check("postedAt").optional().isDate(),
  check("applicant").optional().isString(),
  check("experience").optional().isString(),
  check("email").optional().isEmail(),
  check("mobileNumber").optional().isMobilePhone(["ar-EG"]),
  check("companyName").optional().isString(),
  check("field").optional().isString(),
  check("location").optional().isString(),
  check("salaryRange").optional().isString(),
  check("currency").optional().isCurrency(),
  check("description").optional().isString(),
  check("requirements").optional().isString(),
  check("skills").optional().isString(),
  validatorMiddleware,
];

