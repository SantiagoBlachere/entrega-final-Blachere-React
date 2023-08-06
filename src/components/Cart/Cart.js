import { useContext } from "react";
import React from 'react'
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import "./cart.css"


function Cart() {
  const { total, cart, clearCart, removeItem, totalPrice } = useContext(CartContext)
  
  return (
    
    <div className="cartContainer">
    
    {cart.map((item) => {
        return (
            <div className="cartItem" key={item.id}>

                <div>Name: {item.name}</div>
                <div>Quantity: {item.quantity}</div>
                <div>Price per unit: {item.price}</div>
                <button className="removeItem" onClick={() => removeItem(item.id)}>Remove item</button>
            
            </div>
            
            
        )
    }  
     
    )}
    {cart.length === 0? 
    <>
    <h1>Cart is empty</h1>
    <Link to="/">Take me to the books!</Link>
    </> :
    <>
    <p>Total price: {totalPrice}</p>
    <p>Total quantity: {total}</p>
    <button className="clearCartButton"onClick={() => clearCart()}>Clear Cart</button>
    <Link to="/checkout">Checkout</Link>
    </>}
    
    </div>
)
}

export default Cart