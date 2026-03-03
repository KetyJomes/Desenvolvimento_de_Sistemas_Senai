import { Request, Response, NextFunction, response } from "express";
import Product from "../models/productModel";

export const validateUpdate = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params
    const {name} = req.body
    const nameExists = await Product.findById(id);
    if(nameExists == name){
        return res.status(400).send({response: `Esse produto ja existe`})
    }
    next();
}


 