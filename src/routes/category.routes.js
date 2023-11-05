const router = require("express").Router();




router.route("/category").post().get();

router.route("/category/id").put().delete();




module.exports = router;
