
import './App.css';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/Context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<ItemListContainer />}></Route>
              <Route path="/genre/:genre" element={<ItemListContainer />}></Route>
              <Route path="/book/:id" element={<ItemDetailContainer />}></Route>
              <Route path="/cart" element={<Cart></Cart>}></Route>
              <Route path="*" element={<h1>404 NOT FOUND</h1>}></Route>
              <Route path="/checkout" element={<Checkout />}></Route>
            </Routes>
          </CartProvider>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
