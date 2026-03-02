import express, { Router } from 'express';
import PersonController from '../controllers/PersonController.ts';

const router: Router = express.Router();

router
    .get('/usuarios', PersonController.getUsers)
    .post('/cadastrar', PersonController.postUsers)
    .put('/alterar/:id', PersonController.putUsers)
    .delete('/deletar/:id', PersonController.deleteUsers)

export default router;