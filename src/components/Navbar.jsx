import React from 'react';
import { AiFillSketchCircle } from 'react-icons/ai';
import { GiFarmTractor } from 'react-icons/gi';
import logo from "../logo_transparent.png";
import { FaDiscord } from "react-icons/fa";
import { FaBitcoin } from 'react-icons/fa';
import { BsCashCoin } from 'react-icons/bs';
const NavBarItem = ({ title, classProps,text}) => (
  <li className={`mx-4 cursor-pointer ${classProps}`}>
    {title}{text}
  </li>
);
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="w-full flex md:justify-center justify-between items-center 
    p-4">
      <div className="w-full md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-40 cursor-pointer rounded-full p-0 m-0 bg-gray-500"/>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {
          [
          <FaDiscord className="text-5xl m-2 p-2 cursor-pointer"/>,
          <FaBitcoin className="text-5xl m-2 p-2 cursor-pointer"/>,
          <BsCashCoin className="text-5xl m-2 p-2 cursor-pointer"/>,
          <AiFillSketchCircle className="text-5xl m-2 p-2 cursor-pointer"/>,
          <GiFarmTractor className="text-5xl m-2 p-2 cursor-pointer"/>,
          <BsCashCoin className="text-5xl m-2 p-2 cursor-pointer"/>
        ].map((item, index) => (
          <NavBarItem key={item + index} title={item}/>
        ))}
        <li className="bg-[#b313db] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#ccc90d]">
          Login
        </li>
      </ul>
      

      
    </nav>
  )
}

export default Navbar