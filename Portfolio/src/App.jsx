import { useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";



function App() {
const ref = useRef(null);
const scrollToSection = (ref) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
};
  return (
    <>
      <Navbar onBtnClick = {()=>scrollToSection(ref)}/>
      <Home />
      <About ref={ref}/>
      <Contact/>
      <footer>
        <div className="flex justify-center items-center h-20 bg-[#fdf8ca]">
          <p className="text-blue-900 font-bold">© 2025 Moksha Pandit. All rights reserved.</p>
        </div>
      </footer>
      
    </>
  );
}

export default App;
