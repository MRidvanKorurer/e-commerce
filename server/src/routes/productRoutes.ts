import express from "express";
import productController from "../controllers/productController";

const router = express.Router();


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
router.get("/", productController.getAllProducts);



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
router.post("/", productController.createProduct);


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
router.get("/flash-products", productController.getIsFlashProducts);


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
router.get("/top-sales-products", productController.getTopSalesProducts);

/**
 * @swagger
 * /api/products/new-products:
 *   get:
 *     summary: Get last 12 products
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
router.get("/new-products", productController.getNewProducts);


export default router;