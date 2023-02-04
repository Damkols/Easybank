import React from 'react';
import "./App.scss"
import Navbar from './Navbar/Navbar';

const App = () => {
  return (
    //main container
    <div className="container">

      {/* header section */}
      <header>
        <Navbar />
      </header>
    </div>
  )
}

export default App