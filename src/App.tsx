import React from 'react';
import "./App.scss"
import Articles from './Articles/Articles';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Services from './Services/Services';

const App = () => {
  return (
    <>
    <header>
      <div className="container">      
        <Navbar />
      </div>
    </header>
    <div className="container">      
      <Home />
      <Services />
      <Articles />
      <Footer />
    </div>
    </>
  )
}

export default App