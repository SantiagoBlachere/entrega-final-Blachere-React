import { createContext, useState } from "react";
import React from 'react'
export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    console.log(cart)
    const addItem = (item, quantity) => {
        if(!existsInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.log("hmm")
        }
    }
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter((book) => {
            return book.id !== itemId
        })
        setCart(cartUpdated)
    }
    const clearCart = () => {
        setCart([]);
    }
    const existsInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }
    const totalQuantity = cart.map( (book) => {
        let initial = 0;
        initial += book.quantity
        return initial
    })
    const totalPrices = cart.map ( (book) => {
        let initialPrice = 0;
        initialPrice += book.price
        return initialPrice
    })
    
    const total = totalQuantity.reduce( (acc, current) => acc + current, 0)
    const totalPrice = totalPrices.reduce ( (acc, current) => acc + current, 0)
    
   
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total, totalPrice }}>
            { children }
        </CartContext.Provider>
    )
}

