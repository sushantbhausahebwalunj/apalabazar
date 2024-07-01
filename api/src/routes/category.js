import express from 'express';
import Category from '../models/category.js'; 
import slugify from 'slugify';

const CategoryRouter = express.Router();

CategoryRouter.post('/create', (req, res) => {
    const categoryObj = {
        name: req.body.name,
        slug: slugify(req.body.name)
    };

    if (req.body.parentId) {
        categoryObj.parentId = req.body.parentId;
    }

    const cat = new Category(categoryObj);
    cat.save()
        .then(category => {
            res.status(201).json({ category });
        })
        .catch(error => {
            res.status(400).json({ error });
        });
});

export default CategoryRouter;
