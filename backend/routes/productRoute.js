import express from 'express';
import { getProducts, createProduct, deleteProduct, updateProduct } from '../controllers/productController';

const router = express.Router();

router.get('/', getProducts);
router.post('/api/products', createProduct);
router.delete('/api/products/:id', deleteProduct);
router.put('/api/products/:id', updateProduct);


export default router;