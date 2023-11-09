const { check } = require("express-validator");
const { validationResult } = require("express-validator");
const Course = require("../models/course");

const {
  validatorMiddleware,
} = require("../../middlewares/validator.middleware");
const ApiError = require("../index");

exports.createCourseValidate = [
  check("name").notEmpty().withMessage("Course name is required").isString(),
  check("language").optional().isString(),
  check("startDate").optional().isISO8601().toDate(),
  check("courseIntroduction").optional().isString(),
  check("courseAssessment").optional().isString(),
  check("courseMaterials").optional().isString(),
  check("publishingDate").optional().isISO8601().toDate(),
  check("duration").optional().isString(),
  check("courseRequirements").optional().isString(),
  check("numberOfLessons")
    .optional()
    .isInt()
    .withMessage("Must be a valid number"),
  check("certificate")
    .optional()
    .isBoolean()
    .withMessage("Must be a boolean value"),

  validatorMiddleware,
];

exports.updateCourseValidate = [
  check("id").isMongoId().withMessage("Invalid Mongo ID"),
  check("name").optional().isString(),
  check("language").optional().isString(),
  check("startDate").optional().isISO8601().toDate(),
  check("courseIntroduction").optional().isString(),
  check("courseAssessment").optional().isString(),
  check("courseMaterials").optional().isString(),
  check("publishingDate").optional().isISO8601().toDate(),
  check("duration").optional().isString(),
  check("courseRequirements").optional().isString(),
  check("numberOfLessons")
    .optional()
    .isInt()
    .withMessage("Must be a valid number"),
  check("certificate")
    .optional()
    .isBoolean()
    .withMessage("Must be a boolean value"),

  validatorMiddleware,
];
