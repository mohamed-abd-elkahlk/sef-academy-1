const router = require("express").Router();

const {
  createCertifacte,
  deleteCertifacte,
  getAllCertifacte,
  getOneCertifacte,
  updateCertifacte,
} = require("../services/certificate.service");

router.route("/").get(getAllCertifacte).post(createCertifacte);
router
  .route("/:id")
  .get(getOneCertifacte)
  .delete(deleteCertifacte)
  .put(updateCertifacte);

module.exports = router;
