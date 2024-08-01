const apiUrl = import.meta.env.VITE_API_URL;

const endpoints = {
    categories: {
        baseURL : `${apiUrl}/categories`,
        getAllCategories: `${apiUrl}/categories`,
        createCategory:  `${apiUrl}/categories`,
        getSingleCategory:  `${apiUrl}/categories/:id`
    },
    products: {
        baseURL : `${apiUrl}/products`,
        getAllProducts: `${apiUrl}/products`,
        getFlashProducts:  `${apiUrl}/products/flash-products`,
        getTopSalesProducts:  `${apiUrl}/products/top-sales-products`,
        getNewProducts:  `${apiUrl}/products/new-products`,
    }
}


export default endpoints;