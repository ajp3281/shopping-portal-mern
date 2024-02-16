import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
const router = express.Router();
import { getProducts, getProductById, createProduct, deleteProduct } from '../controllers/productController.js';

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id').get(getProductById).put(protect, admin, createProduct).delete(protect, admin, deleteProduct);



export default router;