const { validationResult } = require

exports.validatorMiddleware = async(req, res, next) => {

  const result =  validationResult(req);
  if (!result.isEmpty()) {
    return res.send({ errors: result.array() });
  }

  next();
};
