"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productController_1 = __importDefault(require("../controllers/productController"));
const router = express_1.default.Router();
/**
 * @swagger
 * tags:
 *   name: Products
 *   description: The products managing API
 */
/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Products found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 categories:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                      id:
 *                         type: number
 *                      categoryId:
 *                         type: number
 *                      name:
 *                        type: string
 *                      description:
 *                        type: string
 *                      price:
 *                        type: number
 *                      discount:
 *                        type: number
 *                      images:
 *                        type: string
 *                      attributes:
 *                        type: string
 *                      brand:
 *                        type: string
 *                      stock:
 *                        type: number
 *                      rating:
 *                        type: number
 *                      isFlash:
 *                        type: boolean
 *       404:
 *         description: Products not found
 *       500:
 *         description: Internal server error
 */
router.get("/", productController_1.default.getAllProducts);
/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               categoryId:
 *                 type: string
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               discount:
 *                 type: number
 *               images:
 *                 type: string
 *               attributes:
 *                 type: string
 *               brand:
 *                 type: string
 *               stock:
 *                 type: number
 *               rating:
 *                 type: number
 *               isFlash:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Products found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 products:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                      id:
 *                         type: string
 *                      categoryId:
 *                         type: string
 *                      name:
 *                        type: string
 *                      description:
 *                        type: string
 *                      price:
 *                        type: number
 *                      discount:
 *                        type: number
 *                      images:
 *                        type: string
 *                      attributes:
 *                        type: string
 *                      brand:
 *                        type: string
 *                      stock:
 *                        type: number
 *                      rating:
 *                        type: number
 *                      isFlash:
 *                        type: boolean
 *       404:
 *         description: Products not found
 *       500:
 *         description: Internal server error
 */
router.post("/", productController_1.default.createProduct);
/**
 * @swagger
 * /api/products/flash-products:
 *   get:
 *     summary: Get all flash products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Products found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 categories:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                      id:
 *                         type: number
 *                      categoryId:
 *                         type: number
 *                      name:
 *                        type: string
 *                      description:
 *                        type: string
 *                      price:
 *                        type: number
 *                      discount:
 *                        type: number
 *                      images:
 *                        type: string
 *                      attributes:
 *                        type: string
 *                      brand:
 *                        type: string
 *                      stock:
 *                        type: number
 *                      rating:
 *                        type: number
 *                      isFlash:
 *                        type: boolean
 *       404:
 *         description: Products not found
 *       500:
 *         description: Internal server error
 */
router.get("/flash-products", productController_1.default.getIsFlashProducts);
/**
 * @swagger
 * /api/products/top-sales-products:
 *   get:
 *     summary: Get top 10 sales products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Products found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 categories:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                      id:
 *                         type: number
 *                      categoryId:
 *                         type: number
 *                      name:
 *                        type: string
 *                      description:
 *                        type: string
 *                      price:
 *                        type: number
 *                      discount:
 *                        type: number
 *                      images:
 *                        type: string
 *                      attributes:
 *                        type: string
 *                      brand:
 *                        type: string
 *                      stock:
 *                        type: number
 *                      rating:
 *                        type: number
 *                      isFlash:
 *                        type: boolean
 *       404:
 *         description: Products not found
 *       500:
 *         description: Internal server error
 */
router.get("/top-sales-products", productController_1.default.getTopSalesProducts);
exports.default = router;
