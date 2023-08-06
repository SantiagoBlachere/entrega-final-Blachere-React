import React, { useState } from 'react'
import { db } from '../../firebase/firebaseConfig'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext';
import { Timestamp, addDoc, documentId, getDocs, writeBatch, query, where, collection } from 'firebase/firestore';
import Form from './Form';
import "./checkout.css"


function Checkout() {
    
    const [orderId, setOrderId] = useState("");

    const { cart, totalPrice } = useContext(CartContext)

    const createOrder = async ( { userName, phone, email} ) => {
        

        try {
            const order = {
                user: {
                    userName, phone, email
                },
                items: cart,
                total: totalPrice,
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db);
            const noStock = [];
            const ids = cart.map(book => book.id)
            const ref = collection(db, 'books')
            const booksAddedFromFs = await getDocs(query(ref, where(documentId(), 'in', ids)))
            const { docs } = booksAddedFromFs;
            docs.forEach( doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const bookAddedToCart = cart.find(book => book.id === doc.id)
                const bookQuant = bookAddedToCart?.quantity

                if (stockDb >= bookQuant) {
                    batch.update(doc.ref, { stock: stockDb - bookQuant})

                } else {
                    noStock.push ( {id: doc.id, ...dataDoc})
                }
            })
            if (noStock.length === 0) {
                await batch.commit()
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, order)
                setOrderId(orderAdded.id)
            } else {
                console.error('products out of stock')
            }
        }
        catch (error) {
            console.log(error)
        } 
        
        
    }
  return (
    <>
    <div className='checkout'>Checkout</div>
    <Form onConfirm={createOrder} id={orderId}></Form>
    </>
  )
}

export default Checkout