import React from 'react';
import { FaLinkedin , FaGithub } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="bg-[#fdf8ca] flex justify-around items-center h-20 ">
      <h1 className="text-2xl font-bold text-blue-900 ">Moksha Pandit</h1>

      <ul className="flex gap-8 text-blue-900 font-bold">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Work</li>
      </ul>

      <div className="flex gap-4 items-center">
        <a  href="https://www.linkedin.com/in/moksha-pandit/" target="_blank"><FaLinkedin className='h-14 cursor-pointer'/></a>
        <a href="https://github.com/Mokshpandit" target="_blank"><FaGithub className='h-14 cursor-pointer'/></a>
        
      </div>
    </nav>
  );
};

export default Navbar;
