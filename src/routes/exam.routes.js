const router = require("express").Router();

router.route("/").get().post();
router.route("/:id").get().post().put();

module.exports = router;
