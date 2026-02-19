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
    .get('/usuarios/:id',(req: Request,res: Response) =>{
        const {id} = req.params
        let convertedId = Number(id)
        res.status(200).send({response: id})
    })
     .get('/filtro',(req: Request,res: Response) =>{
        const {name, lastname} = req.query
        res.status(200).send({response: `${name}, ${lastname}`})
    })
     .put('/atualizar/:id',(req: Request,res: Response) =>{
        const {id} = req.params
        const {name, lastname} = req.body
        res.status(200).send({response: `Atualizando o uruário ${id} -> ${name} ${lastname}`})
    })

export default router;