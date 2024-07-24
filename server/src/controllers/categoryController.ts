import Category from "../models/Category";
import { Request, Response} from "express";
import categoryService from "../services/categoryService";


class CategoryController {
    async getAllCategories(req: Request, res: Response) {
        try {
            const categories = await categoryService.getAllCategories();

            if(!categories) {
                return res.status(404).json({
                    success: false,
                    message: 'Category Error'
                })
            }

            return res.status(200).json({
                success: true,
                categories
            })
        } catch (error) {
            console.log('Server error!', error);
            res.status(500).json({ result: false, message: "Internal server error" });
        }
    }

    async getSingleCategory(req: Request, res: Response) {
        try {
            const {id} = req.params;
            if(!id) return res.status(404).json({success: false, message: "Category not fount"});

            const category = await categoryService.getCategoryById(id);

            if(!category) {
                return res.status(400).json({
                    success: false,
                    message: 'Category Not Fount'
                })
            }
            
            return res.status(200).json({
                success: true,
                category
            })
        } catch (error) {
            console.log('Server error!', error);
            res.status(500).json({ result: false, message: "Internal server error" });
        }
    }


    async createCategory(req: Request, res: Response) {
        try {
            const category = await categoryService.createCategory(req.body);

            return res.status(201).json({
                success: true,
                category
            })
        } catch (error) {
            console.log('Server error!', error);
            res.status(500).json({ result: false, message: "Internal server error" });
        }
    }
    
}



export default new CategoryController();