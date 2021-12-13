import { product, category } from '@prisma/client';
import { IConnection } from './connection';


export default class ProductProvider {
    constructor(private connection: IConnection) {}

    public async getProductCount(req:any) {

        const { category, discount, search } = req.filter;

        return this.connection.prisma.product.count({
            where: {
                category: category ? category : {gt: 0},
                discount: discount ? {gte: 1} : {gte: 0},
                OR: [
                    { name: { contains: search ? search : "" } }
                ]
            }
        })
    }

    public async getFilteredProduct(req:any) {

        const { category, discount, search } = req.filter;
        const { page, take } = req.pagination;
        const { price } = req.order;
        
        return this.connection.prisma.product.findMany({
            skip: page ? (page - 1) * (take ? take : 10) : 0,
            take: take ? take : 10,
            where: {
                category: category ? category : {gt: 0},
                discount: discount ? {gte: 1} : {gte: 0},
                OR: [
                    { name: { contains: search ? search : "" } }
                ]
            },
            orderBy: [
                { price: price == "asc" ? "asc" : "desc" }
            ]
        })
    }

    public async getCategory() {
        return this.connection.prisma.category.findMany()
    }
}