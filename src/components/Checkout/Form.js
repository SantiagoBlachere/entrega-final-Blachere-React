import React, { useContext, useState } from 'react'

import { CartContext } from '../Context/CartContext';

function Form({ onConfirm, id }){
    const [userName, setUserName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [orderMade, setOrderMade] = useState(false)
    const { clearCart } = useContext(CartContext)
    

    const handleConfirm = (e) => {
        e.preventDefault()
        const userInfo = {
            userName, phone, email
        }
        onConfirm(userInfo)
        setOrderMade(true)
        clearCart()
    } 
  return (
    orderMade? (
      <div className='orderMadeContainer'>
        <h1>Your oder has been made! id: {id}</h1>
      </div>
        
    ) :
    <form className="formContainer" onSubmit={handleConfirm}>
            <label htmlFor="name">Name:</label>
            <input className="input" type="text" value={userName} onChange={({ target }) => setUserName(target.value)} required />

            <label htmlFor="email">Email:</label>
            <input className="input" type="text" value={email} onChange={({ target }) => setEmail(target.value)} required />
            <br />

            <label htmlFor="phone">Phone:</label>
            <input className="input" type="text" value={phone} onChange={({ target }) => setPhone(target.value)} required />
            <br />

            <input type="submit" value="Create order" />
    </form>
  )
}

export default Form