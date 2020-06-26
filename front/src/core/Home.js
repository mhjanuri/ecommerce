import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts } from './apiCore';
import Card from './Card';

const Home = () => {
    const [productBySell, setProductBySell] = useState([]);
    const [productByArrival, setProductByArrival] = useState([]);
    const [error, setError] = useState([]);

    const loadProductBySell = () => {
        getProducts('sold').then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setProductBySell(data)
            }
        });
    };

    const loadProductByArrival = () => {
        getProducts('createdAt').then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setProductByArrival(data)
            }
        });
    };

    useEffect(() => {
        loadProductByArrival();
        loadProductBySell();
    }, []);

    return (
        <Layout title="Homepage" description="Node React E-commerce App">
            <h2 className="mb-4">Best  Sellers</h2>
            {productBySell}
        </Layout>
    );
};

export default Home;