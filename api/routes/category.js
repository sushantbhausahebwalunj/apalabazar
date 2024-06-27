import express from 'express';
import Category from '../models/category.js'; // Note: Ensure the file extension is included
import slugify from 'slugify';

const router = express.Router();

router.get('/category/create', (req, res) => {
    console.log('hallo' + req);
    const categoryObj = {
        name: req.body.name,
        slug: slugify(req.body.name)
    };

    if (req.body.parentId) {
        categoryObj.parentId = req.body.parentId;
    }

    const cat = new Category(categoryObj);
    cat.save((error, category) => {
        if (error) return res.status(400).json({ error });
        if (category) {
            return res.status(201).json({ category });
        }
    });
});

export default router;
