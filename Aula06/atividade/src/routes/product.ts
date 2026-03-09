import express, { Router } from 'express';
import { validateUpdate, validateGet, validateDelete } from '../middlewares/ProductMiddlewares.ts';
import ProductController from '../controllers/ProductControllers.ts';
const router: Router = express.Router();

router
    .get('/product',ProductController.getProduct)
    .get('/productFilter/:id', validateGet, ProductController.getProductFilter)
    .post('/register', ProductController.postProduct)
    .put('/update/:id', validateUpdate, ProductController.updateProduct)
    .delete('/delete/:id', validateDelete, ProductController.deleteProduct)

export default router;