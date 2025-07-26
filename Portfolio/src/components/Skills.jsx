import React, { forwardRef } from "react";
import Ticker from "./Ticker";

const Skills = forwardRef((props, ref) => {
const upperMarquee = [
    "/01.svg",
    "/02.svg",
    "/03.svg",
    "/04.svg",
    "/05.svg",
    "/06.svg",
    "/07.svg",
    "/08.svg",
    "/09.svg",
    "/10.svg",
  ];

  const lowerMarquee = [
    "/01.svg",
    "/02.svg",
    "/03.svg",
    "/04.svg",
    "/05.svg",
    "/06.svg",
    "/07.svg",
    "/08.svg",
    "/09.svg",
    "/10.svg",
  ];

  return (
    <div ref={ref} className="pl-5 pr-5 md:pl-0 md:pr-0  ">
      <div className="justify-center md:ml-60 md:mr-60 mb-3 pt-7 overflow-x-hidden">
        <h1 className="text-[#f7f197] font-extrabold md:text-[116px] select-none ">
          Skills.
        </h1>
        <p className="md:text-[24px] md:leading-[44px]">
          I have a diverse set of skills that I have honed over the years. My
          expertise includes web development, UI/UX design, and
          problem-solving. 
          </p>
        <Ticker images={upperMarquee} from={0} to={"-100%"} />
        <Ticker images={upperMarquee}  from={"-100%"} to={0} />
      </div>
    </div>
  );
});

export default Skills;
