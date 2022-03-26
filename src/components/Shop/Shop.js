import React, { useEffect, useState } from 'react';
import { addToLocalStorage, getStoredCart } from "../../utilities/local-storage-db";
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
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
        // console.log(storedCart);
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
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
            {/* Two Questions for Bonus Marks */}
            <div className="bonus-container">
                {/* <h2>This is the part of Question and Answer</h2> */}

                <div>
                    <div className="bonus">
                        <h3>Question 1. How react works?</h3>
                        <p>React is a JavaScript library. It's not a framework. It creates user interfaces (UIs) in a predictable and efficient way using declarative code. We can use it to build single page applications and mobile apps or to build complex apps.<br/>The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.
                        The DOM will be slow while building a client-side apps. So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it.Thus the virtual DOM will try to find the most efficient way to update the browser’s DOM. React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation. Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. 
                        </p>
                    </div>
                    <div className="bonus">
                        <h3>Question 2. Differences between props and state.</h3>
                        <p>Props are known as properties. It can be used to pass data from one component to another. Props cannot be modified. It is read-only and Immutable. Props can be used with state and functional components.<br/>
                        On the otherhand, the state represents a part of an Application that can be change. Each component can have its State. The state is Mutable and 
                        can be modified. The Data is passed within the component only. State can be used only with the state components/class component. State is both read and write.
                        </p>
                    </div>
                </div>    
            </div>
        </div>
    );
};

export default Shop;