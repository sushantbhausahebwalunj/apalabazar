import express from 'express';
import { verifyAdmin } from '../middlewares/verifyAdmin.js';
import { createCategory, deleteCategory, updateCategory, viewCategories, viewCategory } from '../controller/category.controller.js';

const router = express.Router();


router.post('/create', verifyAdmin, createCategory);
router.get('/view/:id', verifyAdmin, viewCategory);
router.put('/update/:id', verifyAdmin, updateCategory);
router.delete('/delete/:id', verifyAdmin, deleteCategory);
router.get('/view', verifyAdmin, viewCategories);

export default router;
