import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import myImage from "./assets/portrait.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="flex w-full h-screen justify-center">
        <header className="w-[700px] h-[700px] m-36">
          <h3 className="font-normal text-4xl m-2"> Hello, I'm Moksha, </h3>
          <h1 className="font-extrabold text-[140px] leading-none font-stretch-120%">
            Web Developer
          </h1>
          <h3 className="font-normal text-4xl m-2"> based in India</h3>
          <div className="Resumebtn-wrapper m-4">
            <button className="Resumebtn " >
              Resume
            </button>
          </div>
        </header>

        <div className="flex justify-center items-center h-[800px] w-[800px]">
          <img className="" id="myImg" src={myImage} alt="portrait" />
        </div>
      </div>
    </>
  );
}

export default App;
