import {Request, Response} from "express";
import productService from "../services/productService";


class ProductController {

    // get all products
    async getAllProducts(req: Request, res: Response) {
        try {
            const products = await productService.getAllProducts();

            if(!products) {
                return res.status(400).json({
                    success: false,
                    message: "Products Not Fount"
                });
            }

            return res.status(200).json({
                success: true,
                products
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Server Error"
            })
        }
    }


    // create product
    async createProduct(req: Request, res: Response) {
        try {
            const products = await productService.createProduct(req.body);

            if(!products) {
                return res.status(400).json({
                    success: false,
                    message: "create product error"
                });
            }

            return res.status(201).json({
                success: true,
                products
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Server Error"
            })
        }
    }


    // get all flash products
    async getIsFlashProducts(req: Request, res: Response) {
        try {
            const products = await productService.getIsFlashProducts();

            if(!products) {
                return res.status(400).json({
                    success: false,
                    message: "Products Not Fount"
                });
            }

            return res.status(200).json({
                success: true,
                products
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Server Error"
            })
        }
    }

    // fetch top 10 sales products
    async getTopSalesProducts(req: Request, res: Response) {
        try {
            const products = await productService.getTopSalesProducts();

            if(!products) {
                return res.status(400).json({
                    success: false,
                    message: "Products Not Fount"
                });
            }

            return res.status(200).json({
                success: true,
                products
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Server Error"
            })
        }
    }

}


export default new ProductController();