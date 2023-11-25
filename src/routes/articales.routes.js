const router = require("express").Router();

const passport = require("passport");
const {
  getOneArticle,
  getAllArticles,
  createArticle,
  deleteArticle,
  updateArticle,
} = require("../services/aticals.service");
const {
  createArticlevalidate,
  deletearticlevalidation,
  getOneArticlevalidation,
  updateArticlevalidate,
} = require("../utils/validators/articles.validator.utils");
const { allowedTo } = require("../services/auth.service");

router.get("/", getAllArticles).get("/:id", getOneArticle);

router.use(
  passport.authenticate("jwt", {
    userProperty: "user",
    session: false,
    ignoreExpiration: false,
  })
  allowedTo("admin")
);

router.route("/").post(createArticlevalidate, createArticle);

router.route("/:id").put(updateArticle).delete(deleteArticle);

module.exports = router;
