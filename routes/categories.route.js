const {Router} = require('express');
const {categoriescontroller} = require('../controllers/categories.controller')
const router = Router();



router.post('/categories', categoriescontroller.createCategories);

router.delete('/categories/:id', categoriescontroller.deleteCategoryById);

router.get('/categories', categoriescontroller.getCategories);




module.exports = router;