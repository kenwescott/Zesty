
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

import CartPage from './pages/Cart';

import PenPencilPage from './pages/Pen_pencil';
import Notebook from './pages/Notebook';
import './App.css'
import Confirmation from "./pages/Confirmation";
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };
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
                  <Route path="/products/:id" element={<ProductDetail addToCart={addToCart} />} />
                  <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/stationery/pen_pencil" element={<PenPencilPage />} />
                  <Route path="/stationery/notebook" element={<Notebook />} />
                  <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
