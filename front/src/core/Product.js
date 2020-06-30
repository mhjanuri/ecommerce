import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts, read } from './apiCore';
import Card from './Card';


const Product = (props) => {
    const [product, setProduct] = useState({});
    const [error, setError] = useState(false);

    const loadSingleProduct = productId => {
        read(productId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProduct(data);
            }
        });
    };

    useEffect(() => {
        const productId = props.match.params.productId;
        loadSingleProduct(productId);
    }, []);

    return (
        <Layout
            title="Homepage"
            description="Node React E-commerce App"
            className="container-fluid"
        >
            <h2 className="mb-4">Single product</h2>
            <div className="row">
                {JSON.stringify(product)}
            </div>
        </Layout>
    );
}

export default Product;