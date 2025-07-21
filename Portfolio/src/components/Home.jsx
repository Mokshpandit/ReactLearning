import React from "react";
import myImage from "../assets/portrait1.png";

const Home = () => {
  return (
    <div className="flex justify-center mb-10">
      <header className="w-1/3 m-36">
        <h3 className="font-normal text-4xl m-2"> Hello, I'm Moksha, </h3>
        <h1 className="font-extrabold text-[140px] leading-none font-stretch-120%">
          Web Developer
        </h1>
        <h3 className="font-normal text-4xl m-2"> based in India</h3>
        <div className="Resumebtn-wrapper m-4">
          <a href="../assets/Moksha_Pandit_Resume.pdf" target="_blank"><button className="Resumebtn ">Resume</button></a>
        </div>
      </header>

      <div className="flex justify-center items-center h-[700px] w-[700px] z-[-1]">
        <img className="" id="myImg" src={myImage} alt="portrait" />
      </div>
      
    </div>
    
  );
};

export default Home;  
