import React, { forwardRef } from "react";
import myImage from "../assets/portrait1.png";

const Home = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="w-full">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center mb-10 pt-24 md:pt-28 select-none w-full">
        <header className="w-full md:w-[38%] flex flex-col items-center md:items-start md:px-0 md:m-25">
          <h3 className="font-normal text-xl md:text-4xl mb-2">Hello, I'm Moksha,</h3>
          <h1 className="font-extrabold text-5xl sm:text-5xl md:text-[140px] leading-none mb-2 text-center md:text-left">
            Web Developer
          </h1>
          <h3 className="font-normal text-xl md:text-4xl mb-4">based in India</h3>
          <div className="Resumebtn-wrapper mb-4 md:m-6">
            <a href="/Moksha_Pandit_Resume.pdf" download>
              <button className="Resumebtn">Resume</button>
            </a>
          </div>
        </header>

        <div className="flex justify-center items-center w-full md:w-auto mb-6 md:mb-0 z-[-1]">
          <img
            className="w-60 h-60 md:w-auto md:h-auto"
            id="myImg"
            src={myImage}
            alt="portrait"
          />
        </div>
      </div>
    </div>
  );
});

export default Home;