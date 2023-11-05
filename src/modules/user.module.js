const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    mobile: {
      type: String,
      trim: true,
    },
    userId: {
      type: String,
      required: [true, "userId required"],
      unique: true,
      lowercase: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "instructor", "student"],
      default: "student",
    },
    active: {
      type: Boolean,
      default: true,
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
