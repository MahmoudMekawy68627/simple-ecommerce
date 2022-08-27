import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
import ProductDetails from './pages/productDetails/ProductDetails';
import Products from './pages/products/Products';

function App() {
  return (
    <div>
      <Navbar />
      
      <div className='marginTop footerProblem '>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='productDetails' element={<ProductDetails />} >

            <Route path=':id' element={<ProductDetails />} />

          </Route>
          
          
          <Route path='cart' element={<Cart />} />

        </Routes>
      </div>
       
      <Footer/>
      {/* <Register /> */}
      
    </div>
  )
}

export default App;
