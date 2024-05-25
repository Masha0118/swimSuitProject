// CartProvider.js

import React, { useState } from 'react';
import CartContext from './CartContext';

const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)

    return (
        <CartContext.Provider value={{ cartList, setCartList, totalPrice, setTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

