import { Request, Response, NextFunction, response } from "express";
import Person from "../models/usuario";

export const validateRegistor = (req: Request, res: Response, next: NextFunction) => {
    const {nome, email} = req.body
    if(!nome || !email){
        return res.status(400).send({response: `Existem dados vazios`})
    }
    next();
}

export const validateUpdate = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params
    const {email} = req.body
    const emailExists = await Person.findById(id);
    if(emailExists == email){
        return res.status(400).send({response: `Esse email ja existe`})
    }
    next();
}

export const validateDelete = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params
    const delite = await Person.findById(id);
    if(!delite){
        return res.status(400).send({response: `Usuário não encontrado`})
    }
    next();
}   
 