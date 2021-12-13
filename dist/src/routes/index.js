"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const router = (0, express_1.Router)();
router.post('/v1/products', product_controller_1.default.getFilteredProduct);
router.get('/v1/categories', product_controller_1.default.getCategory);
exports.default = router;
//# sourceMappingURL=index.js.map