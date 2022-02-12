import React from 'react';
import { AiFillSketchCircle } from 'react-icons/ai';
import { GiFarmTractor } from 'react-icons/gi';

const Navbar = () => {
  return (
    <div className="tx-xl flex m-6 p-6 bg-blue-300">
      <AiFillSketchCircle />
      <GiFarmTractor/>
    </div>
  )
}

export default Navbar