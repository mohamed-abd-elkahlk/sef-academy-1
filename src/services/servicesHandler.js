const asyncHandeler = require("express-async-handler");
const { ApiError, ApiFeatures } = require("../utils");

exports.deleteOne = (Model) =>
  asyncHandeler(async (req, res, next) => {
    I;
    const { id } = req.params;
    const document = await Model.findByIdAndDelete(id);
    if (!document) {
      return next(ApiError(`can't find this id ${id}`, 404));
    }
    res.status(201).json({ document });
  });

exports.createOne = (Model) =>
  asyncHandeler(async (req, res, next) => {
    const document = await Model.create(req.body);
    res.status(201).json({ document });
  });

exports.updateFunction = (Model) =>
  asyncHandeler(async (req, res, next) => {
    const { id } = req.params;
    const updatedItem = req.body;

    const document = await Model.findByIdAndUpdate(id, updatedItem, {
      new: true,
    });

    if (!document) {
      return next(new ApiError(`no document with this id :${id}`, 404));
    }

    document.save();
    res.status(200).json({ data: document });
  });

exports.getAll = (model) => {
  asyncHandeler(async (req, res, next) => {
    const documentcounter = await model.countDocuments();
    const Api = new ApiFeatures(mode.find(), req.query)
      .pagenate(documentcounter)
      .limitFildes()
      .serch()
      .sort();
    const { mogooseQuery, pagenation } = Api;
    const document = await mogooseQuery;
    if (!document) {
      return next(ApiError(`Could not find document`, 404));
    }
    res.status(200).json({
      result: document.length,
      pagenation,
      data: document,
    });
  });
};
