const Category = require('../models/Category.model');
module.exports.categoriescontroller={
   createCategories: async function(req, res) {
   
  await Category.create({
   name: req.body.name, 
    });
    res.json("Категория добавлена");
    
  },
  deleteCategoryById: async function(req,res){
    const category = await Category.findByIdAndRemove(req.params.id)
    res.json(`категория удалена`);
},
 
getCategories: async(req, res)=>{
    const categories = await Category.find()
    res.json(categories);
}
}