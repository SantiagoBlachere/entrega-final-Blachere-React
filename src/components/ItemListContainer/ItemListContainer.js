import React, { useEffect } from 'react'
import { useState } from 'react'
import "./itemList.css"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig.js'


function ItemListContainer() {
  const [products, setProducts] = useState([])
  const { genre } = useParams()
  
  
  useEffect(() => {
    

    const collectionRef = genre ? 
    query(collection(db, 'books'), where('genre', "==", genre)) :
    collection(db, 'books')

    getDocs(collectionRef)
      .then(response => {
        const booksUpdated = response.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ...data}
        })
        setProducts(booksUpdated)
      })
      .catch(error => {
        console.log(error)
      })
      
    
  },[genre])
  
  
  


  return (
    <div className="containerCards">
    {products.map((book) => (
      book.stock > 0 ? (
        <div className="card" key={book.id}>
          <div>Title: {book.name}</div>
          <div>Genre: {book.genre}</div>
          <div>Price: {book.price}</div>
          <div>Stock {book.stock}</div>
          <div><img src={`${book.image}`} alt="" /></div>
          <Link to={`/book/${book.id}`} className="Option">Details</Link>
        </div>
      ) : (
        <div className="card" key={book.id}>
          <div>Title: {book.name}</div>
          <div>Genre: {book.genre}</div>
          <div>Price: {book.price}</div>
          
          <div key={book.id}>OUT OF STOCK</div>
          <div><img src={`${book.image}`} alt="" /></div>
          
        </div>
        
      )
      
    ))}
    </div>
  );

  
  
  
  
  
  
}

export default ItemListContainer