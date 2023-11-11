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
    duration: {
      type: String,
      required: [true, "duration is required"],
    },
  },
  { timestamps: true }
);

exports.Certificate = mongoose.model("Certificate", certificateSchema);
