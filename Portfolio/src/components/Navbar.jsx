import React from 'react';
import { FaLinkedin , FaGithub } from "react-icons/fa";


const Navbar = ( props ) => {
  return (
    <nav className="bg-[#fdf8ca] fixed w-full flex flex-col items-center justify-center md:flex-row md:justify-around md:items-center md:h-18 ">
      <h1 className="text-xl md:text-2xl font-bold text-blue-900 mb-2 md:mb-0">Moksha Pandit</h1>

      <ul className="flex gap-10 text-blue-900 font-bold pb-2 md:pb-0">
        <li className="navbtn cursor-pointer" onClick={props.onHomeBtnClick}>Home</li>
        <li className="navbtn cursor-pointer" onClick={props.onAboutBtnClick}>About</li>
        <li className="navbtn cursor-pointer" onClick={props.onContactBtnClick}>Contact</li>
        <li className="navbtn cursor-pointer" >Work</li>
      </ul>

      <div className="flex gap-4 items-center  ">
        <a  href="https://www.linkedin.com/in/moksha-pandit/" target="_blank"><FaLinkedin className='md:h-14 cursor-pointer'/></a>
        <a href="https://github.com/Mokshpandit" target="_blank"><FaGithub className='md:h-14 cursor-pointer'/></a>
        
      </div>
    </nav>
  );
};

export default Navbar;
