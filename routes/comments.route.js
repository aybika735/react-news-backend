const {Router} = require('express');
const {commentscontroller} = require('../controllers/comments.controller')
const router = Router();
const authmiddleware = require('../models/middlewares/auth.middleware')



router.post('/comments', authmiddleware, commentscontroller.createComments);

router.delete('/comments/:id',  authmiddleware, commentscontroller.deleteCommentById);

router.get('/comments/news/:id', commentscontroller.getCommentsByNews);
router.get('/comments', commentscontroller.getAllComments);



module.exports = router;