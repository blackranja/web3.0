import React from 'react';
//import { Navbar, RanjaOne, RanjaTwo, Footer } from './components/*';
import Navbar from './components/Navbar';
import RanjaTwo from './components/RanjaTwo';
import { RanjaOne } from './components/RanjaOne';
import { Footer } from './components/Footer';
const App = () => {
  return (
    <div className="flex bg-gray-700">
      <div className="flex w-screen bg-gray-800"> 
        <Navbar />
        <RanjaOne />
        <RanjaTwo />
        <Footer />
        
      </div>
    </div>
  )
}

export default App