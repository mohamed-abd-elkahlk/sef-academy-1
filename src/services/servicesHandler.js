const asyncHandeler = require("express-async-handler");
const { ApiError, ApiFeatures } = require("../utils");

exports.deleteOne = (Model) =>
  asyncHandeler(async (req, res, next) => {
    const { id } = req.params;
    const document = await Model.findByIdAndDelete(id);
    if (!document) {
      return next(new ApiError(`can't find this id ${id}`, 404));
    }
    res.status(204).json({});
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

exports.getAll = (Model) =>
  asyncHandeler(async (req, res, next) => {
    const documentcounter = await Model.countDocuments();
    const Api = new ApiFeatures(Model.find(), req.query)
      .pagenate(documentcounter)
      .limitFildes()
      .serch()
      .sort();

    const { mongooseQuery, pagenation } = Api;
    const document = await mongooseQuery;
    if (!document) {
      return next(new ApiError(`Could not find document`, 404));
    }
    res.status(200).json({
      result: document.length,
      pagenation,
      data: document,
    });
  });
exports.getOne = (Model) =>
  asyncHandeler(async (req, res, next) => {
    const { id } = req.params;

    const document = await Model.findById(id);

    if (!document) {
      return next(new ApiError(`no document with this id : ${id}`, 404));
    }

    res.status(200).json({ data: document });
  });
