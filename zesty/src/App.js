
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './pages/Home';
import Clothing from './pages/Clothing';
import Household from './pages/Household';
import Stationery from './pages/Stationery';
import Sumpromo from './components/Summerpromo';
import ProductDetail from './pages/ProductDetail';
import Footer from './components/Footer';
import PenPencilPage from './pages/Pen_pencil';
import Notebook from './pages/Notebook';
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import React, { useState } from 'react';

function App() {
    const [cart, setCart] = useState([]);
    const addToCart = (item) => setCart([...cart, item]);
  return (
    <Router>
      <Sumpromo/>
      <NavigationBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/household" element={<Household />} />
          <Route path="/stationery" element={<Stationery />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/stationery/pen_pencil" element={<PenPencilPage />} />
        <Route path="/stationery/notebook" element={<Notebook />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
