const router = require("express").Router();

const categoryRoute = require("./category.routes");

router.use("/category", categoryRoute);

module.exports = router;
