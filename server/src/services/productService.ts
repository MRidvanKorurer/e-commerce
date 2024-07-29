import Product from "../models/Product";

class ProductService {
    // fetch all products
    async getAllProducts() {
        try {
            const products = await Product.findAll();
            if(!products) {
                return null;
            }

            return products;
        } catch (error) {
            console.log(error);
        }
    }

    // create product
    async createProduct(productBody: any) {
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
            }

            if(!product) {
                return null
            }

            const newProduct = await Product.create(product);

            if(!newProduct) return null;

            return newProduct;

        } catch (error) {
            console.log(error);
        }
    }

    // fetch flash products
    async getIsFlashProducts() {
        try {
            const isFlashProducts = await Product.findAll({
                where: {
                    isFlash: true
                }
            })

            if(!isFlashProducts) return null

            return isFlashProducts;
        } catch (error) {
            console.log(error);
        }
    }

    // fetch top 10 sales products
    async getTopSalesProducts() {
        try {
            const products = await Product.findAll({
                order: [['salesCount', 'DESC']],
                limit: 10
            })

            if(!products) return null;

            return products;
        } catch (error) {
            console.log(error);
        }
    }

}


export default new ProductService();