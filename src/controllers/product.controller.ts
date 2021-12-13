import { Request, Response } from 'express';
import ProductProvider from "../providers/product.provider";
import connection from '../providers/connection';


class ProductController {

    public async getFilteredProduct(req:Request, res:Response) {

        try {
            const productProvider = new ProductProvider(connection);
            const data = await productProvider.getFilteredProduct(req.body);
            const count = await productProvider.getProductCount(req.body)
            res.status(200).send({count:count, data:data});
        } catch (error) {
            let err: Error = error as any
            res.status(400).send({ mesagge: err.message });
        }
    }


    public async getCategory(req:Request, res:Response) {

        try {
            const productProvider = new ProductProvider(connection);
            const data = await productProvider.getCategory();
            res.status(200).send({data:data});
        } catch (error) {
            let err: Error = error as any
            res.status(400).send({ mesagge: err.message });
        }
    }
}

const productController = new ProductController;
export default productController;