const { check } = require("express-validator");

const {
  validatorMiddleware,
} = require("../../middlewares/validator.middleware");
const ApiError = require("../index");
 const Article=require("../../ models/articles.module");

 exports.createArticlevalidate = [
    check("title").notEmpty().withMessage(" article title is required").isString().trim(),
   
    check("content").notEmpty().withMessage("content is required").isString(),
    check("image").notEmpty().withMessage("image is required").isString().trim(),
    check(" category").notEmpty().withMessage("category is required").isString(),
    check("date").notEmpty().withMessage("date of article is required").isDate().trim(),
 
    check("status").notEmpty().withMessage("status is required").isString(),
    check("owner").notEmpty().withMessage("owner  is required").isString(),
    validatorMiddleware,
  
  
  ];
  

  exports.updateArticlevalidate = [
    check("id").isMongoId() .withMessage("Invalid ID"),
   
  
    check("content").optional().isString(),
    check("image").optional().isString(),
    check(" category").optional().isString(),
    check("date").optional().isDate().trim(),
 
    check("status").optional().isString(),
  

        validatorMiddleware,
  
  ];
  
  exports.getOneArticlevalidation = [
    check("id").isMongoId().withMessage("Invalid ID"),
    validatorMiddleware,]
    
    exports.deletearticlevalidation=[
        check("id").isMongoId().withMessage("Invalid ID"),
        validatorMiddleware,
    ]
  