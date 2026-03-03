import { Request, Response } from "express";
import Product from '../models/productModel'

class ProductController {
    static async postProduct(req: Request, res: Response){
        const {name, description, price, stock, category} = req.body
        const product = new Product({name, description, price, stock, category})
        await product.save()
       
        return res.status(200).send("Produto cadastrado com sucesso!")
    }
    static async getProduct(req: Request, res: Response){
        const product = await Product.find()
        return res.status(200).send({response: product})
    }
    static async getProductFilter(req: Request, res: Response) {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
        return res.status(404).send({ message: "Produto não encontrado" });
    }

    return res.status(200).send(product);
}
    static async updateProduct(req: Request, res: Response){
        const {id} = req.params
        const {name, description, price, stock, category} = req.body
        await Product.findByIdAndUpdate(id, { name, description, price, stock, category});
        return res.status(200).send("Produto atualizado!")
    }
    static async deleteProduct(req: Request, res: Response){
        const {id} = req.params
        const existProduct = await Product.findByIdAndDelete(id);
        
        if (!existProduct) {
        return res.status(404).send({ message: "Produto não encontrado" });
        }
        return res.status(200).send("Produto deletado!")
    }
}

export default ProductController;       