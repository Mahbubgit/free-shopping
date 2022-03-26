// use local storage to manage cart data
const addToLocalStorage = id =>{
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    const totalCartItem = shoppingCart.length;
    
    if(totalCartItem >= 4){
        alert('You can not added more then 4 items.');
    }
    else{
        // add product
        const quantity = shoppingCart[id];
        if(quantity){
            alert('You can not added an item twice.');
        }
        else{
            shoppingCart[id] = 1;
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

// get data from local storage to view
const getStoredCart = () =>{
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    
    return shoppingCart;
}
// delete particular product
const removeFromLocalStorage = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

// delete all products
const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
    getStoredCart();
}

export {
    addToLocalStorage, 
    getStoredCart,
    removeFromLocalStorage,
    deleteShoppingCart
}