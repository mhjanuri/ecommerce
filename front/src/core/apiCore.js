import { API_URL } from '../config';

export const getProducts = (sortBy) => {
    return fetch(`${API_URL}/products?sortBy=${sortBy}&order=desc&limit=6`, {
        method: "GET"
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            console.log(error);
        });
};

export const getCategories = () => {
    return fetch(`${API_URL}/categories`, {
        method: "GET"
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            console.log(error);
        });
};