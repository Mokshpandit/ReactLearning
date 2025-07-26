import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";

const Navbar = (props) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <nav className="bg-[#fdf8ca] fixed w-full flex flex-col items-center justify-center md:flex-row md:justify-evenly md:items-center md:h-18 ">
      <h1 className="text-xl md:text-2xl font-bold text-blue-900 mb-2 md:mb-0 select-none">
        Moksha Pandit
      </h1>

      <ul className="flex gap-4 md:gap-10 text-blue-900 font-bold pb-2 md:pb-0">
        <li className="navbtn cursor-pointer select-none" onClick={props.onHomeBtnClick}>
          Home
        </li>
        <li className="navbtn cursor-pointer select-none" onClick={props.onAboutBtnClick}>
          About
        </li>
        <li className="navbtn cursor-pointer select-none" onClick={props.onSkillsBtnClick}>
          Skills
        </li>
        <li className="navbtn cursor-pointer select-none" onClick={props.onContactBtnClick}>
          Contact
        </li>
            
        
        <li className="navbtn cursor-pointer relative select-none" onClick={togglePopup}>
  Work
  {popupVisible && (
    <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-gray-700 text-white text-center rounded-lg px-4 py-2 z-50 transition-all duration-300">
      Work in Progress!
      <span className="absolute left-1/2 -translate-x-1/2 -top-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-gray-700"></span>
    </span>
  )}
</li>

          
      </ul>

      <div className="flex gap-4 items-center  ">
        <a href="https://www.linkedin.com/in/moksha-pandit/" target="_blank">
          <FaLinkedin className="md:h-14 cursor-pointer" />
        </a>
        <a href="https://github.com/Mokshpandit" target="_blank">
          <FaGithub className="md:h-14 cursor-pointer" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
