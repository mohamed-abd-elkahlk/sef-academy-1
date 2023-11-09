const { check } = require("express-validator");

const {
  validatorMiddleware,
} = require("../../middlewares/validator.middleware");
const ApiError = require("../index")

const Category = require("../../modules/category.module")


exports.createCategoryValidate = [
  check("name")
    .notEmpty()
    .withMessage("Category name is required")
    .isLength({ min: 2 })
    .withMessage("Category name must be at least 2 characters")
    .isLength({max:20})
    .withMessage("Category name must be at most 20 characters")
    .custom(async(name,{req})=>{

        const category = await Category.findOne({name})
        if(category){
            throw new Error(new ApiError("Category name is already existing",400));
        }
        return true;
    })
    ,
    validatorMiddleware
];

exports.updateCategoryValidate  = [
    check(id).notEmpty().withMessage("Category Id is required").isMongoId().withMessage("Invalid Id"),
    check("name")
      .optional()
      .isLength({ min: 2 })
      .withMessage("Category name must be at least 2 characters")
      .isLength({max:20})
      .withMessage("Category name must be at most 20 characters")
      ,
      validatorMiddleware
  ];



