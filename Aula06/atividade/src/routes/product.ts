import express, { Router } from 'express';
import { validateUpdate } from '../middlewares/productMiddlewares.ts';
import ProductController from '../controllers/productControllers.ts';
const router: Router = express.Router();

router
    .get('/product',ProductController.getProduct)
    .post('/register', ProductController.postProduct)
    .put('/update/:id', ProductController.updateProduct)
    .delete('/delete/:id', ProductController.deleteProduct)

export default router;