const { check } = require("express");

const {
  validatorMiddleware,
} = require("../../middlewares/validator.middleware");
const ApiError = require("../index");

// for using in  delete and getOne operations  

exports.mongoIdValidate = [
  check("id")
    .notEmpty()
    .withMessage("ID is required")
    .isMongoId()
    .withMessage("Invalid ID"),
  validatorMiddleware,
];
