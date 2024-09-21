// App.js
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Menu from './Menu';
import Testimonials from './Testimonials';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Menu />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;