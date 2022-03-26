import React from 'react';
import './Cart.css';
import {deleteShoppingCart, removeFromLocalStorage} from '../../utilities/local-storage-db';

const Cart = (props) => {
    const {cart} = props;
    // console.log(cart);
    
    for(const product of cart){
        console.log(product);
        // const cartId = product.id;
        // const productName = product.name;
    }

        return (
            <div>
                <h3>Selected Items: {cart.length}</h3>
                        
                <div className='cart-item'>
                    <img src={cart.img} alt="" />
                        <h4>Name: {cart.name}</h4>
                        <button onClick={() => removeFromLocalStorage(cart.id)}>Remove</button>
                </div>
                <button>Choose One For Me</button>
                <button onClick={() => deleteShoppingCart()}>Reset</button>
            </div>
        );
};

export default Cart;