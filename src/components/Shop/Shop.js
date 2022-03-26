import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import './Shop.css';

const Shop = () => {
    
    const [products, setProducts] = useState([]);

    useEffect( () =>{
        // console.log('fetch data');
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setProducts(data))
    }, []);

    return (
        <div>
            <h1>Free Shopping</h1>
            {/* <h3>Choose your item for your baby with free of cost</h3> */}
            <p>[Add to cart only 4 items]</p>
            <div className="shop-container">
                <div className="products-container">
                    {/* <h2>This is for Products:{products.length} </h2> */}
                    {
                        products.map(product => <Product
                                                key={product.id}
                                                product={product}
                                                ></Product>)
                    }

                </div>
                <div className="cart-container">
                    <h2>This is for Cart</h2>
                </div>
            </div>
            <div className="question-answer-container">
                <h2>This is the part of Question and Answer</h2>
            </div>
        </div>
    );
};

export default Shop;