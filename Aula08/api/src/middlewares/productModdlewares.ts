import { Request, Response, NextFunction, response } from "express";
import Person from "../models/Product.ts";

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
    const { name, description, price, stock, category } = req.body
    if(!name || !description || !price || !stock || !category ){
        return res.status(400).send({response: `Existem dados vazios.`})
    }

    next();
}