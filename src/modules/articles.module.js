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
    required: true,
    trim: true,
  },
  // TODO: make it refere to category module
  category: {
    type: String,
    required: true,
  },

  // TODO this is the published Date refctor it
  date: {
    type: String,
    required: true,
    trim: true,
  },

  // TODO: make it refere to 3 valuse [published,scheduled,saved drafts]
  status: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: true,
  },
});
const Article = mongoose.model("article", articleSchema);
module.exports = Article;
