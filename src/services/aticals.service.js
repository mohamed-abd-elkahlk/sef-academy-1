const apiServices = require("./servicesHandler");
const Article = require("../modules/articles.module");

exports.getOneArticle = apiServices.getOne(Article);

exports.getAllArticles = apiServices.getAll(Article);

exports.updateArticle = apiServices.updateFunction(Article);

exports.deleteArticle = apiServices.deleteOne(Article);

exports.createArticle = apiServices.createOne(Article);
