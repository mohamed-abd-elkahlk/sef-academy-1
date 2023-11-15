const validator = require("validator");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    trim: true,
  },

  category: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "Category",
  },

  // TODO this is the published Date refctor it

  publishDate: {
    type: Date,
    default: Date.now(),
  },

  // TODO: make it refere to 3 valuse [published,scheduled,saved drafts]
  status: {
    type: String,
    required: true,
    enum: ["published", "scheduled", "saved drafts"],
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});
const Article = mongoose.model("article", articleSchema);

module.exports = Article;
