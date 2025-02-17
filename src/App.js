import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import ProductList from './components/productList';
import { OurTeam } from './pages/ourTeam';
import { Career } from './pages/career';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />}  />
        <Route path="/Career" element={<Career/>} />
        <Route path="/Our Team" element={<OurTeam/>} />
      </Routes>
    </div>
  );
};

export default App;