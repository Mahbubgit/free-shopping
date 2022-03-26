import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const {product, handleAddToCartButton} = props;
    const {id, name, img, price} = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-information'>
                <p>ID: {id}</p>
                <p>Name: {name}</p>
                <p>Price: $ {price}</p>
            </div>
            <button onClick={() => handleAddToCartButton(product)} className='cart-btn'>
               <p className='btn-text'>Add to Cart</p> 
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;