import { Request, Response, NextFunction, response } from "express";
import Product from "../models/Product.ts";

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
    const { name, description, price, stock, category } = req.body
    if (
        name === undefined ||
        description === undefined ||
        price === undefined ||
        stock === undefined ||
        category === undefined
    ) {
        return res.status(400).send({ message: "Existem dados vazios." });
    }

    next();
}