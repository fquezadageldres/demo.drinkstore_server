import { Router } from 'express';
import productController from '../controllers/product.controller';

const router: Router = Router();

router.post('/v1/products', productController.getFilteredProduct);
router.get('/v1/categories', productController.getCategory);

export default router;
