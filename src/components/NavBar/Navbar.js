import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import "./navbar.css"
export default function Navbar() {
  return (
   <nav className='navbar'>
        <Link style={{ textDecoration: 'none', color: 'inherit' }}to={`/`}><h1>Gotria Library</h1></Link>
        <section>
            <Link to={`/`}>All</Link>
            <Link to={`/genre/horror`}>Horror</Link>
            <Link to={`/genre/science fiction`}>Science Fiction</Link>
            <Link to ={`/genre/romance`}>Romance</Link>
            <CartWidget></CartWidget>
        </section>
   </nav>
  )
}
