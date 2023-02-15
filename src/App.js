import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import {Routes, Route} from 'react-router-dom';


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Products/:id" element={<Product/>}/>
      </Routes>
    </>
  );
}

export default App;
