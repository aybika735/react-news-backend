const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  text: String,
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },

  newsId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "News",
  },
});

const Comment = mongoose.model("Comment", categorySchema);

module.exports = Comment;
