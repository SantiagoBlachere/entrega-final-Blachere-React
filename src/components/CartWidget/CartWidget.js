import React from 'react'
import icon from './assets/cart-icon.png'
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import "./cartwidget.css"

const CartWidget = () => {
  const { cart } = useContext(CartContext)
  return (
    <div className='cartWidget'>
        <Link to={`./cart`}><img className="icon" alt="" src={icon}></img></Link>
        <p>{cart.length}</p>
    </div>
  )
}

export default CartWidget