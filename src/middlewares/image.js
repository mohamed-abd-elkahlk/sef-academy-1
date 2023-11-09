const multer = require("multer");
const { ApiError } = require("../utils");

const multeroOprions = () => {
  const muletrStorge = multer.memoryStorage();
  const multerFiletr = (req, file, cb) => {
    if (file.mimetype.startsWith("image") || file.mimetype.startsWith("pdf")) {
      cb(null, true);
    } else {
      cb(new ApiError("Only Images and pdf allowed", 400), false);
    }
  };

  const upload = multer({ storage: muletrStorge, fileFilter: multerFiletr });
  return upload;
};

exports.uploadSingleImage = (fildName) => multeroOprions().single(fildName);
exports.uploadSingleFile = (fildName) => multeroOprions().single(fildName);
