const News = require("../models/New.model");

module.exports.newscontroller = {
  createNews: async function (req, res) {
    const { title, categoryId, comments } = req.body;
    try {
      await News.create({
        title: title,
        categoryId: categoryId,
        comments: comments,
      });
      res.json("Новость добавлена");
    } catch (error) {
      console.log(error);
    }
  },
  deleteNewsById: async function (req, res) {
    const news = await News.findByIdAndRemove(req.params.id);
    res.json("новость удалена");
  },

  changeNews: async function (req, res) {
    const news = await News.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      categoryId: req.body.categoryId,
      comments: req.body.comments,
    });
    res.json("новость  изменена");
  },
  getNewsById: async (req, res) => {
    const news = await News.findById(req.params.id);
    res.json(news);
  },
  getNews: async (req, res) => {
    const news = await News.find();
    res.json(news);
  },

  getNewsByCategory: async (req, res) => {
    try {
      let news = await News.find({ category: req.params.id }).populate(
        "category"
      );
      res.json(news);
    } catch (error) {
      res.json(error);
    }
  },
  addCommentstoNews: async function (req, res) {
    try {
      const comment = await News.findByIdAndUpdate(req.params.id, {
        $push: { comments: req.body.comments },
      });
      res.json(comment);
    } catch (error) {
      console.log(error.toString());
    }
  },

  deleteCommenttoNews: async function (req, res) {
    try {
      const comment = await News.findByIdAndUpdate(req.params.id, {
        $pull: { comments: req.body.comments },
      }).populate("comments");
      res.json(comment);
    } catch (error) {
      console.log(error.toString());
    }
  },
};
