import e from 'express';
import express, { Request, response, Response, Router } from 'express';

interface Usuario{
    id: number,
    nome: string
    email: string
    tipo: "Aluno" | "Professor" | "Coordenador"
    ativo: boolean 
    date: Date
}

const router: Router = express.Router();
const usuario: Usuario[] = [];

router
    .post('/registrar',(req: Request,res: Response) =>{
        const{id, nome, email, tipo, ativo} = req.body
        const date = new Date()

        const convertedId = Number(id)
        const existe= usuario.find((u) => u.id == convertedId)

        if(existe){
            return res.status(500).send({ response: "Este id já existe!"})
        }

        const contatoExiste = usuario.find((u) => u.email == email)

        if(contatoExiste){
            return res.status(500).send({ response: "Este email já existe!"})
        }

        if (!email){
            return res.status(500).send({ response: "Email vazio!"})
        }

        if (!nome){
            return res.status(500).send({ response: "Nome vazio!"})
        }

        usuario.push({id, nome, email, tipo, ativo, date})
        return res.status(200).send({massage: `Usuario ${id} ${nome} cadastrado com sucesso!`})
    })
    .get('/consultar', (req: Request, res: Response) => {
        res.send(usuario)
    })
    .get('/filtro',(req: Request,res: Response) =>{
        const {tipo} = req.query
        const filtrarTipo= usuario.filter((u) => u.tipo == tipo)
        res.status(200).send({response: {tipo}, usuario:filtrarTipo})
    })
    .get('/consultar/:id', (req: Request, res: Response) => {
    const { id } = req.params
    const convertedId = Number(id)
    const pessoa= usuario.find((u) => u.id == convertedId)
    if(!pessoa){
        return res.status(404).send({ response: "Não encontrado!"})
    }
    
    return res.send({ pessoa })
    })
    .put('/atualizar/:id',(req: Request,res: Response) =>{
        const {id} = req.params
        // const date = new Date()
        const convertedId = Number(id)
        const { nome, email, tipo, ativo} = req.body

        const emailDuplicado = usuario.find((u) => u.email == email)
        

        if(emailDuplicado){
        return res.status(404).send({ response: "Email duplicado!"})
        }

        const existUser = usuario.find((u) => u.id == convertedId)

        if(existUser){
            const existsEmail = existUser.email
                if(existsEmail == email){
                    return res.status(500).send("Este email é o mesmo que o atual. Para atualizar, digite um novo")
                }

            existUser.nome = nome
            existUser.email = email
            existUser.ativo = ativo
            existUser.tipo = tipo
        }
    
        return res.status(200).send({response: `Atualizando o uruário ${id} -> ${nome} ${email} ${tipo} ${ativo}`})
    })
    
    .patch('/atualizando/:id',(req: Request,res: Response) => {
        const {id} = req.params
        const convertedId = Number(id)
        const {email, ativo} = req.body

        const emailDuplicado = usuario.find((u) => u.email == email)
        

        if(emailDuplicado){
        return res.status(404).send({ response: "Email duplicado!"})
        }

        const existUser = usuario.find((u) => u.id == convertedId)

        if(existUser){
            const existsEmail = existUser.email
                if(existsEmail == email){
                    return res.status(500).send("Este email é o mesmo que o atual. Para atualizar, digite um novo")
                }

            existUser.email = email
            existUser.ativo = ativo
            
        }
    
        return res.status(200).send({response: `Atualizando o uruário ${id} -> ${email} ${ativo}`})


    })
    .delete('/deletando/:id',(req: Request,res: Response) => {
        const {id} = req.params

        const convertedId = Number(id)

        const existe= usuario.find((u) => u.id == convertedId)
        

        if(!existe){
            return res.status(404).send({ response: "Não encontrado!"})
        }
        
        usuario.splice(usuario.indexOf(existe), 1)
    
        return res.status(200).send({massage: `Usuario ${id} deletado com sucesso!`})


    })

export default router;