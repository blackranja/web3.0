import React from 'react';
//import { Navbar, RanjaOne, RanjaTwo, Footer } from './components/*';
import Navbar from './components/Navbar';
import RanjaTwo from './components/RanjaTwo';
import { RanjaOne } from './components/RanjaOne';
import { Footer } from './components/Footer';

const App = () => {
  return (
    
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">

      
        <Navbar />
        <RanjaOne />
        </div>
        <RanjaTwo />
        <Footer />
        
      </div>
  
  )
}

export default App