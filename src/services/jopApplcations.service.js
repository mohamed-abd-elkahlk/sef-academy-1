const apiServices = require("./servicesHandler");
const JopApplication = require("../modules/jopApplcations.module");
const Job = require("../modules/jop.module");
const asyncHandler = require("express-async-handler");
const { ApiError } = require("../utils");

exports.getOneJobApplication = apiServices.getOne(JopApplication);

exports.getAllJobApplications = apiServices.getAll(JopApplication);

exports.updateJobApplication = apiServices.updateFunction(JopApplication);

exports.deleteJobApplication = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const jobApplication = await JopApplication.findByIdAndDelete(id);
  if (!jobApplication) {
    return next(ApiError(`can't find this id ${id}`, 404));
  }
  console.log(jobApplication);
  const jop = await Job.findByIdAndUpdate(
    jobApplication.jop,
    {
      $pull: { appliedUsers: id },
    },
    { new: true }
  );
  res.status(204).json({});
});

exports.createJobApplication = asyncHandler(async (req, res, next) => {
  const id = req.user._id;
  const jopApplcations = await JopApplication.create({
    user: id,
    email: req.user.contact_info.email || req.body.email,
    mobile: req.user.contact_info.mobile || req.body.mobile,
    experience: req.body.experience,
  });
  if (!jopApplcations) {
    return next(
      new ApiError("error hapend while crating the jop applicatin", 400)
    );
  }
  const jop = await Job.findByIdAndUpdate(
    req.params.jobId,
    {
      $addToSet: { appliedUsers: id },
    },
    { new: true }
  );
  if (!jop) {
    return next(
      new ApiError(
        `error hapend while updated jop with id: ${req.params.jopId}`,
        400
      )
    );
  }
  res.status(201).json({ data: jopApplcations, jop });
});
