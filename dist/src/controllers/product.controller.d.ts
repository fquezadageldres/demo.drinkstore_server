import { Request, Response } from 'express';
declare class ProductController {
    getFilteredProduct(req: Request, res: Response): Promise<void>;
    getCategory(req: Request, res: Response): Promise<void>;
}
declare const productController: ProductController;
export default productController;
