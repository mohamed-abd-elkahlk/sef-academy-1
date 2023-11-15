const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "student id is required"],
    },
    course: {
      type: mongoose.Types.ObjectId,
      ref: "Course",
      required: [true, "course id is required"],
    },
    uploadDate: {
      type: String,
      required: [true, "uploadDate is required"],
    },
    dateAcqired: {
      type: String,
      required: [true, "uploadDate is required"],
    },
    certificate: {
      type: String,
    },
  },
  { timestamps: true }
);
const Certificate = mongoose.model("Certificate", certificateSchema);
module.exports = Certificate;
