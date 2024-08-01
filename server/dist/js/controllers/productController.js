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
const productService_1 = __importDefault(require("../services/productService"));
class ProductController {
    // get all products
    getAllProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield productService_1.default.getAllProducts();
                if (!products) {
                    return res.status(400).json({
                        success: false,
                        message: "Products Not Fount"
                    });
                }
                return res.status(200).json({
                    success: true,
                    products
                });
            }
            catch (error) {
                return res.status(500).json({
                    success: false,
                    message: "Server Error"
                });
            }
        });
    }
    // create product
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield productService_1.default.createProduct(req.body);
                if (!products) {
                    return res.status(400).json({
                        success: false,
                        message: "create product error"
                    });
                }
                return res.status(201).json({
                    success: true,
                    products
                });
            }
            catch (error) {
                return res.status(500).json({
                    success: false,
                    message: "Server Error"
                });
            }
        });
    }
    // get all flash products
    getIsFlashProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield productService_1.default.getIsFlashProducts();
                if (!products) {
                    return res.status(400).json({
                        success: false,
                        message: "Products Not Fount"
                    });
                }
                return res.status(200).json({
                    success: true,
                    products
                });
            }
            catch (error) {
                return res.status(500).json({
                    success: false,
                    message: "Server Error"
                });
            }
        });
    }
    // fetch top 10 sales products
    getTopSalesProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield productService_1.default.getTopSalesProducts();
                if (!products) {
                    return res.status(400).json({
                        success: false,
                        message: "Products Not Fount"
                    });
                }
                return res.status(200).json({
                    success: true,
                    products
                });
            }
            catch (error) {
                return res.status(500).json({
                    success: false,
                    message: "Server Error"
                });
            }
        });
    }
    // fetch last 12 products
    getNewProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield productService_1.default.getNewProducts();
                if (!products) {
                    return res.status(400).json({
                        success: false,
                        message: "Products Not Fount"
                    });
                }
                return res.status(200).json({
                    success: true,
                    products
                });
            }
            catch (error) {
                return res.status(500).json({
                    success: false,
                    message: "Server Error"
                });
            }
        });
    }
}
exports.default = new ProductController();
