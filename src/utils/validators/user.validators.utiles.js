const { check } = require("express-validator");

const {
  validatorMiddleware,
} = require("../../middlewares/validator.middleware");
const { ApiError } = require("../index");

const User = require("../../modules/user.module");

exports.createUserValidate = [
  check("first_name")
    .notEmpty()
    .withMessage("user first name is required")
    .isString(),
  check("last_name")
    .notEmpty()
    .withMessage("user  last name is required")
    .isString(),
  check("contact_info.mobile")
    .notEmpty()
    .withMessage("user mobile is required")
    .isMobilePhone(["ar-EG"]),
  check("contact_info.email").notEmpty().isEmail(),
  check("userId")
    .notEmpty()
    .withMessage("user id is required")
    .isString()
    .custom(async (id) => {
      const user = await User.findOne({ userId: id });

      if (user)
        throw new Error(new ApiError("There is already a user with this id"));

      return true;
    }),
  check("password").notEmpty().withMessage("password is required").isString(),
  check("role").optional().isIn(["admin", "instructor", "student"]),
  check("active").notEmpty().isBoolean(),

  validatorMiddleware,
];
exports.loginUserValidate = [
  check("userId").notEmpty().withMessage("userId is required").isString(),
  check("password").notEmpty().withMessage("password is required").isString(),
  validatorMiddleware,
];

exports.updateUserValidate = [
  check("id").isMongoId().withMessage("Invalid Mongod"),
  check("name").optional().isString(),
  check("mobile").optional().isMobilePhone(["ar-EG"]),
  check("userId")
    .optional()
    .isString()
    .custom(async (id) => {
      const user = await User.findOne({ userId: id });

      if (user)
        throw new Error(new ApiError("There is already a user with this id"));

      return true;
    }),
  check("role").optional().isIn(["admin", "instructor", "student"]),
  check("active").optional().isBoolean(),
  check("avatar").optional().isString(),

  validatorMiddleware,
];
