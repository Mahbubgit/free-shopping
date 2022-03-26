import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
import {deleteShoppingCart, removeFromLocalStorage} from '../../utilities/local-storage-db';

const Cart = (props) => {
    const {cart} = props;
    
    let productName ='';
    let productImg ='';
    let productId ='';

    cart.forEach(element => {
        // console.log(element.name);
        productName = element.name;
        productImg = element.img;
        productId = element.id;
    });
        return (
            <div>
                <h3>Selected Items: {cart.length}</h3>
                        <div className='cart-item'>
                            <img src={productImg} alt="" />
                            <h4>Name: {productName}</h4>
                            <button onClick={() => removeFromLocalStorage(productId)}>
                                <p>Remove</p> 
                                <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
                            </button>
                        </div>
                   
                <button>Choose One For Me</button>
                <button onClick={() => deleteShoppingCart()}>Reset</button>
            </div>
        ); 
    
};

export default Cart;