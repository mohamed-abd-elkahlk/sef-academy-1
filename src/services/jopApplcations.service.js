const apiServices = require("./servicesHandler");
const JopApplication = require("../modules/jopApplcations.module");
const Job = require("../modules/jop.module");
const User = require("../modules/user.module");
const asyncHandler = require("express-async-handler");
const { ApiError } = require("../utils");

exports.getOneJobApplication = apiServices.getOne(JopApplication);

exports.getAllJobApplications = apiServices.getAll(JopApplication);

exports.updateJobApplication = apiServices.updateFunction(JopApplication);

exports.deleteJobApplication = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const jobApplication = await JopApplication.findByIdAndDelete(id);
  if (!jobApplication) {
    return next(new ApiError(`can't find this id ${id}`, 404));
  }
  const jop = await Job.findByIdAndUpdate(
    jobApplication.jop,
    {
      $pull: { appliedUsers: id },
    },
    { new: true }
  );

  await User.findByIdAndUpdate(req.user._id, {
    $pull: { applyedJops: jobApplication._id },
  });

  res.status(204).json({});
});

exports.createJobApplication = asyncHandler(async (req, res, next) => {
  const id = req.user._id;
  const jopApplcations = await JopApplication.create({
    user: id,
    email: req.user.contact_info.email || req.body.email,
    mobile: req.user.contact_info.mobile || req.body.mobile,
    experience: req.body.experience,
    job: req.params.jobId,
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
  await User.findByIdAndUpdate(req.user._id, {
    $addToSet: { applyedJops: jopApplcations._id },
  });
  res.status(201).json({ data: jopApplcations });
});
