const asyncHandler = require("express-async-handler");
const { ApiError, ApiFeatures } = require("../utils");
exports.deleteOne = (Model) =>
asyncHandler(async (req, res, next) => { I
const {id} = req.params;
const document = await Model.findByIdAndDelete(id);
if (!document) {
return next(ApiError(`can't find this id ${id}`, 404)); }
res.status(201).json({ document }); 
});