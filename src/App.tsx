import React from 'react';
import "./App.scss"
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';

const App = () => {
  return (
    //main container
    <div className="container">

      {/* header section */}
      <header>
        <Navbar />
      </header>
      <Home />
    </div>
  )
}

export default App