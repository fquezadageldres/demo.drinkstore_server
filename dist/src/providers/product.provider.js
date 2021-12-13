"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductProvider {
    constructor(connection) {
        this.connection = connection;
    }
    async getProductCount(req) {
        const { category, discount, search } = req.filter;
        return this.connection.prisma.product.count({
            where: {
                category: category ? category : { gt: 0 },
                discount: discount ? { gte: 1 } : { gte: 0 },
                OR: [
                    { name: { contains: search ? search : "" } }
                ]
            }
        });
    }
    async getFilteredProduct(req) {
        const { category, discount, search } = req.filter;
        const { page, take } = req.pagination;
        const { price } = req.order;
        return this.connection.prisma.product.findMany({
            skip: page ? (page - 1) * (take ? take : 10) : 0,
            take: take ? take : 10,
            where: {
                category: category ? category : { gt: 0 },
                discount: discount ? { gte: 1 } : { gte: 0 },
                OR: [
                    { name: { contains: search ? search : "" } }
                ]
            },
            orderBy: [
                { price: price == "asc" ? "asc" : "desc" }
            ]
        });
    }
    async getCategory() {
        return this.connection.prisma.category.findMany();
    }
}
exports.default = ProductProvider;
//# sourceMappingURL=product.provider.js.map