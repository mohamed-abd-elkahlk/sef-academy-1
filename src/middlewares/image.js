const multer = require('multer');


const storage = multer.memoryStorage();


const upload = multer({storage});


exports.uploadSingle = (fieldName = "image")=> upload.single(fieldName);

