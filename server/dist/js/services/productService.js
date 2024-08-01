"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("../models/Product"));
class ProductService {
    // fetch all products
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield Product_1.default.findAll();
                if (!products) {
                    return null;
                }
                return products;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    // create product
    createProduct(productBody) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = {
                    categoryId: productBody.categoryId,
                    name: productBody.name,
                    description: productBody.description,
                    price: productBody.price,
                    discount: productBody.discount,
                    images: productBody.images,
                    attributes: productBody.attributes,
                    brand: productBody.brand,
                    stock: productBody.stock,
                    rating: productBody.rating,
                    isFlash: productBody.isFlash
                };
                if (!product) {
                    return null;
                }
                const newProduct = yield Product_1.default.create(product);
                if (!newProduct)
                    return null;
                return newProduct;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    // fetch flash products
    getIsFlashProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const isFlashProducts = yield Product_1.default.findAll({
                    where: {
                        isFlash: true
                    }
                });
                if (!isFlashProducts)
                    return null;
                return isFlashProducts;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    // fetch top 10 sales products
    getTopSalesProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield Product_1.default.findAll({
                    order: [['salesCount', 'DESC']],
                    limit: 10
                });
                if (!products)
                    return null;
                return products;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getNewProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield Product_1.default.findAll({
                    order: [
                        ['createdAt', 'DESC']
                    ],
                    limit: 12
                });
                if (!products)
                    return null;
                return products;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = new ProductService();
