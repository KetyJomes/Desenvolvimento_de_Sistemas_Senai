import express, { Router } from 'express';
import PersonController from '../controllers/PersonController.ts';
import { validateRegistor } from '../middlewares/personMiddlewares.ts';
const router: Router = express.Router();

router
    .get('/usuarios', PersonController.getUsers)
    .post('/cadastrar', validateRegistor, PersonController.postUsers)
    .put('/alterar/:id', PersonController.putUsers)
    .delete('/deletar/:id', PersonController.deleteUsers)

export default router;