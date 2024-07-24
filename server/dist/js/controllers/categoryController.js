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
const categoryService_1 = __importDefault(require("../services/categoryService"));
class CategoryController {
    getAllCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = yield categoryService_1.default.getAllCategories();
                if (!categories) {
                    return res.status(404).json({
                        success: false,
                        message: 'Category Error'
                    });
                }
                return res.status(200).json({
                    success: true,
                    categories
                });
            }
            catch (error) {
                console.log('Server error!', error);
                res.status(500).json({ result: false, message: "Internal server error" });
            }
        });
    }
    getSingleCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id)
                    return res.status(404).json({ success: false, message: "Category not fount" });
                const category = yield categoryService_1.default.getCategoryById(id);
                if (!category) {
                    return res.status(400).json({
                        success: false,
                        message: 'Category Not Fount'
                    });
                }
                return res.status(200).json({
                    success: true,
                    category
                });
            }
            catch (error) {
                console.log('Server error!', error);
                res.status(500).json({ result: false, message: "Internal server error" });
            }
        });
    }
    createCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield categoryService_1.default.createCategory(req.body);
                return res.status(201).json({
                    success: true,
                    category
                });
            }
            catch (error) {
                console.log('Server error!', error);
                res.status(500).json({ result: false, message: "Internal server error" });
            }
        });
    }
}
exports.default = new CategoryController();
