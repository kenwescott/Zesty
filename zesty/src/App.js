import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './pages/Navbar';
import Home from './pages/Home';
import Clothing from './pages/Clothing';
import Household from './pages/Household';
import Stationery from './pages/Stationery';
import Sumpromo from './components/Summerpromo';

function App() {
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
