import { useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";



function App() {
const aboutref = useRef(null);
const contactref = useRef(null);
const homeref = useRef(null);


const scrollToSection = (ref) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
};
  return (
    <div className="pt-0 p-4 md:p-0 md:m-auto">
      <Navbar onAboutBtnClick = {()=>scrollToSection(aboutref)} onContactBtnClick = {()=> scrollToSection(contactref)} onHomeBtnClick = {()=> scrollToSection(homeref)} />

      <Home ref = {homeref}/>
      <About ref={aboutref}/>
      <Contact ref = {contactref}/>

      <footer>
        <div className="flex justify-center items-center h-20 bg-[#fdf8ca] select-none">
          <p className="text-blue-900 font-bold">© 2025 Moksha Pandit. All rights reserved.</p>
        </div>
      </footer>
      
    </div>
  );
}

export default App;
