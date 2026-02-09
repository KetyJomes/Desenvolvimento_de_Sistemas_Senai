import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();
const people: object[] = [];

router
    .post('/registrar',(req: Request,res: Response) =>{
        const{name, lastname} = req.body
        people.push({name,lastname})
        res.status(200).send({massage: `Usuário ${name} ${lastname} cadastrado com sucesso!`})
    })
    .get('/usuarios',(req: Request,res: Response) =>{
        res.status(200).send({users: people})
    })
//....

export default router;