import { useState, useEffect } from "react";
import React from 'react'
import "./itemDetail.css"
import ItemDetail from "./ItemDetail.js";
import { useParams } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore'
import { db } from "../../firebase/firebaseConfig";



function ItemDetailContainer() {
    
    const [product, setProduct] = useState(null)
    
    const { id } = useParams()
    useEffect( () => {
        
        const docRef = doc(db, 'books', id)
        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const bookUpdated = { id: response.id, ...data}
                setProduct(bookUpdated)
            })
            .catch(error => {
                console.log(error)
            })
            
    }, [id])

  return (
    <div className="detailContainer">
        <ItemDetail {...product}></ItemDetail>
    </div>
  )
}

export default ItemDetailContainer