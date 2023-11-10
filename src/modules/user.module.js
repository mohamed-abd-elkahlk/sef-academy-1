const mongoose = require("mongoose");
// TODO: add score ,about,age,city,country,education{unvirsty,major,graduation year},contact info{email,mobileNumber},cv
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
