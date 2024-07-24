const endpoints = {
    categories: {
        baseURL : `process.env.REACT_APP_API_URL${'/categories'}`,
        getAllCategories: `process.env.REACT_APP_API_URL${'/categories'}`,
        createCategory:  `process.env.REACT_APP_API_URL${'/categories'}`,
        getSingleCategory:  `process.env.REACT_APP_API_URL${`/categories/:id`}`
    },
}


export default endpoints;