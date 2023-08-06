import React from 'react'
import { useState } from 'react'
import "./counter.css"

function ItemCounter({initial, stock, onAdd}) {
const [quantity, setQuantity] = useState(initial)
const add = () => {
    if (quantity < stock) {
        setQuantity(quantity + 1)
        
    }
    
}
const decrease = () => {
    if (quantity > 1) {
        setQuantity(quantity - 1)
        
    }
}
  return (
    <div class="counterContainer">
        <button className="counterButton"onClick={add}>+</button>
        <p className='counterQuant'>{quantity}</p>
        <button className="counterButton" onClick={decrease}>-</button>
        <button className="addButton" onClick={() => onAdd(quantity)}>Add to cart</button>
    </div>
  )
}

export default ItemCounter