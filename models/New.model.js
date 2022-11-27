const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  title: String,
  categoryId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
  },
  comments: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Comment",
    },
  ],
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
