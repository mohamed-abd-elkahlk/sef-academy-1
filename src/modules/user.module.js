const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    userId: {
      type: String,
      required: [true, "userId required"],
      unique: true,
      lowercase: true,
    },
    password: {
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
    score: { type: Number, default: 0 },
    about: { type: String },
    age: { type: Number },
    city: { type: String },
    country: { type: String },
    education: {
      university: { type: String, required: true },
      major: { type: String },
      graduation_year: { type: Number },
    },
    contact_info: [
      {
        email: String,
        mobile: Number,
      },
    ],
    cv: { type: String },

    salt: {
      type: String,
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", (next) => {
  if (!this.isModified("password")) {
    return next();
  }
  const password = genPasswordHash(this.password);
  this.password = password.hashedPassword;
  this.salt = password.salt;
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
