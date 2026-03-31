import express, { Request, response, Response, Router } from 'express';
import ProductController from '../controllers/productController.ts';
import { validateRegister } from '../middlewares/productModdlewares.ts';
const router: Router = express.Router();

router
    .post('/cadastro', validateRegister, ProductController.product)
    .get('/products', ProductController.getProducts)
    .put('/update/:id', ProductController.putProducts)
    .delete('/delete/:id', ProductController.deleteProducts)

export default router;