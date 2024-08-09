import express from 'express';
import { verifyAdmin } from '../middleware/verifyAdmin.js';
import upload from '../cloud/multerConfig.js'; // Correctly import multer configuration
import { createProduct, deleteProduct, updateProduct, viewProducts, viewProduct,SuggestProduct } from '../controller/product.controller.js';

const router = express.Router();

router.post('/create', verifyAdmin, upload.single('image'), createProduct);
router.get('/view/:id', viewProduct);
router.put('/update/:id', verifyAdmin, upload.single('image'), updateProduct);
router.delete('/delete/:id', verifyAdmin, deleteProduct);
router.get('/view', viewProducts);
router.get('/suggested/:categoryId', async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const suggestedProducts = await Product.find({ category: categoryId }).limit(10);
        res.status(200).json(suggestedProducts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching suggested products' });
    }
});export default router;
