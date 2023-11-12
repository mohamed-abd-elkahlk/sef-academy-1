const apiServices = require("./servicesHandler");
const Certificate = require("../modules/certificate.module");

exports.createCertifacte = apiServices.createOne(Certificate);

exports.getOneCertifacte = apiServices.getOne(Certificate);

exports.getAllCertifacte = apiServices.getAll(Certificate);

exports.updateCertifacte = apiServices.updateFunction(Certificate);

exports.deleteCertifacte = apiServices.deleteOne(Certificate);
