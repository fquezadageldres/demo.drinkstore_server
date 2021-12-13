import { product, category } from '@prisma/client';
import { IConnection } from './connection';
export default class ProductProvider {
    private connection;
    constructor(connection: IConnection);
    getProductCount(req: any): Promise<number>;
    getFilteredProduct(req: any): Promise<product[]>;
    getCategory(): Promise<category[]>;
}
