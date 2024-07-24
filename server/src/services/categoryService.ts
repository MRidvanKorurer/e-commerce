import Category from "../models/Category";


class CategoryService {
    async getAllCategories() {
        try {
            const categories = await Category.findAll();

            if(!categories) return null;

            return categories;
        } catch (error) {
            console.log(error);
        }
    }


    async getCategoryById(categoryId: string) {
        try {
            const category = await Category.findByPk(categoryId);

            if(!category) return null;

            return category;
        } catch (error) {
            console.log(error);
        }
    }


    async createCategory(categoryBody: any) {
        try {   
            const category = await Category.create(categoryBody);

            if(!category) return null;

            return category;
        } catch (error) {
            console.log(error);
        }
    }
}


export default new CategoryService();