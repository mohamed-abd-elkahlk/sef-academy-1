const { check } = require("express-validator");

const {
  validatorMiddleware,
} = require("../../middlewares/validator.middleware");

exports.createArticlevalidate = [
  check("title").notEmpty().withMessage("article title is required").isString(),
  check("content").notEmpty().withMessage("content is required").isString(),
  check("category").notEmpty().withMessage("category is required"),
  check("publishDate").notEmpty().withMessage("date of article is required"),
  check("status").notEmpty().withMessage("status is required").isString(),
  validatorMiddleware,
];

exports.updateArticlevalidate = [
  check("id").isMongoId().withMessage("Invalid ID"),

  check("content").optional().isString(),
  check("image").optional().isString(),
  check(" category").optional().isString(),
  check("date").optional().isDate().trim(),

  check("status").optional().isString(),

  validatorMiddleware,
];

exports.getOneArticlevalidation = [
  check("id").isMongoId().withMessage("Invalid ID"),
  validatorMiddleware,
];

exports.deletearticlevalidation = [
  check("id").isMongoId().withMessage("Invalid ID"),
  validatorMiddleware,
];
