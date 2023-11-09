const apiServices = require("./servicesHandler");
const Category = require("../modules/category.module");

exports.getOneCatgory = apiServices.getOne(Category);

exports.getAllCatgories = apiServices.getAll(Category);

exports.updateCatgory = apiServices.updateFunction(Category);

exports.deleteCatgory = apiServices.deleteOne(Category);

exports.crateCatgory = apiServices.createOne(Category);
