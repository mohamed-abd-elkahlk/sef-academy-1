const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      minLength: 2,
      maxLength: 20,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

categorySchema.virtual("articles", {
  ref: "Article",
  localField: "_id",
  foreignField: "category",
});
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
