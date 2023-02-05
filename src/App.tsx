import React from 'react';
import "./App.scss"
import Articles from './Articles/Articles';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Services from './Services/Services';

const App = () => {
  return (
    //main container
    <div className="container">

      {/* header section */}
      <header>
        <Navbar />
      </header>
      <Home />
      <Services />
      <Articles />
    </div>
  )
}

export default App