const mongoose = require("mongoose");

const jopApplicationScheam = new mongoose.Schema({
  user: {
    ref: "user",
    type: mongoose.Schema.ObjectId,
  },
  job: {
    ref: "Job",
    type: mongoose.Schema.ObjectId,
  },
  email: { type: String, experience: Number, required: true },
  mobile: { type: Number, required: true },
  experience: Number,
  cv: String,
});
const JopApplication = mongoose.model("jopApplication", jopApplicationScheam);

module.exports = JopApplication;
