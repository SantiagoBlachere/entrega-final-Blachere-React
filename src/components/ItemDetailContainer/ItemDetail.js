import React, { useContext, useState } from 'react'
import ItemCounter from '../itemCounter/ItemCounter'
import { CartContext } from '../Context/CartContext';


import { Link } from 'react-router-dom';

function ItemDetail({id, name, description, price, image, stock}) {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext)
  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
    const item = {
      id, name, price
    }
    addItem(item, quantity)
  }
  return (
    <div className="detailContainer">
    <h2>{name}</h2>
    <p>{description}</p>
    <p>{price}</p>
    <div>
        <img alt="" src={image}></img>
    </div>
    
    { quantityAdded > 0?  (
      <>
      <Link to='/cart'>Buy</Link>
      <Link to ="/">Keep browsing</Link>
      </>
    ) : (
      <ItemCounter initial={1} stock={stock} onAdd={handleOnAdd}></ItemCounter>
    )
    
}
    </div>
    
  )
}

export default ItemDetail