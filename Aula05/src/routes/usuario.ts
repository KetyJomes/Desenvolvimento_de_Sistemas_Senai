import express, { Request, response, Response, Router } from 'express';
import Person from '../models/Person.ts'


const router: Router = express.Router();


router
    .post('/registrar', async(req: Request,res: Response) =>{
        const{nome, sobrenome, idade} = req.body
        const person = new Person({nome, sobrenome, idade})
        await person.save()
        res.status(200).send("Registrado com sucesso!")
    })
    .get('/consultar', async (req: Request, res: Response) => {
        const people = await Person.find()
        res.status(200).send({response:people})
    })
    .get('/consultarUma', async (req: Request, res: Response) => {
        const people = await Person.find({nome:"Ketlyn"})
        res.status(200).send({response:people})
    })
    .get('/filtro',(req: Request,res: Response) =>{
      
    })
    .get('/consultar/:id', (req: Request, res: Response) => {
  
    })
    .put('/atualizar/:id',(req: Request,res: Response) =>{
        
    })
    .patch('/atualizando/:id',(req: Request,res: Response) => {

    })
    .delete('/deletando/:id',(req: Request,res: Response) => {
        
    })

export default router;