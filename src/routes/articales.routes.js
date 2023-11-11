const router = require("express").Router();

const {
  getOneArticle,
  getAllArticles,
  createArticle,
  deleteArticle,
  updateArticle,
} = require("../services/aticals.service");

router.route("/").post(createArticle).get(getAllArticles);

router
  .route("/:id")
  .put(updateArticle)
  .delete(deleteArticle)
  .get(getOneArticle);

module.exports = router;
