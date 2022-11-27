const {Router} = require('express');
const {newscontroller} = require('../controllers/news.controller')
const router = Router();



router.post('/news', newscontroller.createNews);

router.delete('/news/:id', newscontroller.deleteNewsById);


router.patch('/news/:id',  newscontroller.changeNews);

router.get('/news/:id', newscontroller.getNewsById);
router.get('/news', newscontroller.getNews);
router.get('/news/categories/:id', newscontroller.getNewsByCategory);
router.patch("/user/add/:id", newscontroller.addCommentstoNews);
router.delete("/user/delete/:id", newscontroller.deleteCommenttoNews);
module.exports = router;