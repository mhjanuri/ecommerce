import { API_URL } from '../config';

export const createCategory = (userId, token, category) => {
    // console.log(name, email, password);
    return fetch(`${API_URL}/category/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const createProduct = (userId, token, product) => {
    // console.log(name, email, password);
    return fetch(`${API_URL}/product/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
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

export const listOrders = (userId, token) => {
    return fetch(`${API_URL}/order/list/${userId}`, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(error => {
            console.log(error);
        });
};

export const getStatusValues = (userId, token) => {
    return fetch(`${API_URL}/order/status-values/${userId}`, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(error => {
            console.log(error);
        });
};

export const updateOrderStatus = (userId, token, orderId, status) => {
    return fetch(`${API_URL}/order/${orderId}/status/${userId}`, {
        method: "PUT",
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status, orderId })
    })
        .then(response => {
            return response.json();
        })
        .catch(error => {
            console.log(error);
        });
};