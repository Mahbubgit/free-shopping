import React, { useEffect, useState } from 'react';
import { addToLocalStorage, getStoredCart } from "../../utilities/local-storage-db";
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Bonus from "../Bonus/Bonus";
import './Shop.css';

const Shop = () => {
    
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () =>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setProducts(data))
    }, []);

    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    const handleAddToCartButton = (newProduct) =>{

        if(cart.length >= 4){
            alert('You cannot added more than 4 items.');
        }
        else{
            let newCart = [];
            const exists = cart.find(product => product.id === newProduct.id);
            if(!exists){
                newProduct.quantity = newProduct.quantity + 1;
                newCart = [...cart, newProduct];
            }
            setCart(newCart);
            addToLocalStorage(newProduct.id);
        }
    }

    return (
        <div>
            <h1>Free Shopping</h1>
            <p>[Add to cart only 4 items]</p>
            <div className="shop-container">
                <div className="products-container">
                    {
                        products.map(product => <Product
                                                key={product.id}
                                                product={product}
                                                handleAddToCartButton={handleAddToCartButton}
                                                ></Product>)
                    }

                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
            <div className="bonus-container">
                    <Bonus></Bonus>
            </div>
        </div>
    );
};

export default Shop;