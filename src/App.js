import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Garlic from './components/pages/Garlic';
import Onion from './components/pages/Onion';
import Order from './components/pages/Order';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />}/>
            <Route path='/garlic' element={<Garlic />}/>
            <Route path='/onion' element={<Onion />}/>
            <Route path='/order' element={<Order />}/>
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
