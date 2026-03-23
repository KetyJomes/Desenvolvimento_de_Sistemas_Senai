import { Request, Response } from "express";
import Product from "../models/Product.ts";

class ProductController {
    static async getProducts(req: Request, res: Response) {
        const products = await Product.find()
        return res.status(200).send({ response: products })
    }

    static async postProducts(req: Request, res: Response) {
        const { name, description, price, stock, category, createdAt } = req.body
        const products = new Product({ name, description, price, stock, category, createdAt })
        await products.save()
        return res.status(200).send({ response: `Produto ${name} cadastrado!` })
    }

    static async putProducts(req: Request, res: Response) {
        const {id} = req.params
        const {name, description, price, stock, category} = req.body
        await Product.findByIdAndUpdate(id, {name, description, price, stock, category})
        return res.status(200).send({ response: `Produto ${name} atualizado!`})
    }

    static async deleteProducts(req: Request, res: Response) {
        const {id} = req.params
        await Product.findByIdAndDelete(id)
        return res.status(200).send({ response: "Produto deletado!" })
    }
}

export default ProductController