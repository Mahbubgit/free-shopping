import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    // console.log(cart);
    return (
        <div>
            <h3>Selected Items: {cart.length}</h3>
            <button>Choose One For Me</button>
            <button>Reset</button>
        </div>
    );
};

export default Cart;