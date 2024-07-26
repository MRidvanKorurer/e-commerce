const apiUrl = import.meta.env.VITE_API_URL;

const endpoints = {
    categories: {
        baseURL : `${apiUrl}/categories`,
        getAllCategories: `${apiUrl}/categories`,
        createCategory:  `${apiUrl}/categories`,
        getSingleCategory:  `${apiUrl}/categories/:id`
    },
}


export default endpoints;