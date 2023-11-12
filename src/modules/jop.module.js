const mongoose = require("mongoose");
// TODO: refactor it and add copmpany {name,desrption,logo} jop type {remote, on site},apllyed user to this jop
const jobSchema = new mongoose.Schema(
  {
    company: {
      name: {
        type: String,
        required: true,
      },
      description: String,
      logo: String,
    },
    position: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["open", "closed", "inProgress"],
      default: "open",
    },
    postedAt: {
      type: Date,
      default: Date.now(),
    },
    jobType: {
      type: String,
      enum: ["remote", "onSite"],
      default: "onSite",
    },
    appliedUsers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", //user model
      },
    ],
    location: String,
    salaryRange: {
      from: Number,
      to: Number,
    },
    currency: {
      type: String,
      default: "USD",
    },
    jobDescription: String,
    requirements: [String],
    skills: [String],
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
