"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_provider_1 = __importDefault(require("../providers/product.provider"));
const connection_1 = __importDefault(require("../providers/connection"));
class ProductController {
    async getFilteredProduct(req, res) {
        try {
            const productProvider = new product_provider_1.default(connection_1.default);
            const data = await productProvider.getFilteredProduct(req.body);
            const count = await productProvider.getProductCount(req.body);
            res.status(200).send({ count: count, data: data });
        }
        catch (error) {
            let err = error;
            res.status(400).send({ mesagge: err.message });
        }
    }
    async getCategory(req, res) {
        try {
            const productProvider = new product_provider_1.default(connection_1.default);
            const data = await productProvider.getCategory();
            res.status(200).send({ data: data });
        }
        catch (error) {
            let err = error;
            res.status(400).send({ mesagge: err.message });
        }
    }
}
const productController = new ProductController;
exports.default = productController;
//# sourceMappingURL=product.controller.js.map