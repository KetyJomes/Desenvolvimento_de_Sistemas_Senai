import { Request, Response } from "express";
import Person from '../models/usuario.ts'

class PersonController {
    static async getUsers(req: Request, res: Response){
        const users = await Person.find()
        return res.status(200).send({response: users})
    }
    static async postUsers(req: Request, res: Response){
        const {nome, email} = req.body
        const users = new Person({nome, email})
        await users.save()
        return res.status(200).send("Cadastrado com sucesso!")
    }
    static async putUsers(req: Request, res: Response){
        const {id} = req.params
        const {nome, email} = req.body
        await Person.findByIdAndUpdate(id, { nome, email });
        return res.status(200).send("Atualizado!")
    }
    static async deleteUsers(req: Request, res: Response){
        const {id} = req.params
        await Person.findByIdAndDelete(id);
        return res.status(200).send("Usuário deletado!")
    }
}

export default PersonController;       