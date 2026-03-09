import { Request, Response, NextFunction, response } from "express";
import Product from "../models/ProductModel";

export const validateUpdate = async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body
    const nameExists = await Product.findById(name);
    if (nameExists == name) {
        return res.status(400).send({ response: `Esse produto ja existe` })
    }
    next();
}
export const validateGet = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    try {
        const product = await Product.findById(id);
        if (product) {
            next();
        }
    }
    catch {
        return res.status(404).send({ message: "Produto não encontrado" });
    }
}
export const validateDelete = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    try {
        const existProduct = await Product.findById(id);
        if (existProduct) {
            next();
        }
    }
    catch {
             return res.status(404).send({ message: "Produto não encontrado" });
    }
}




