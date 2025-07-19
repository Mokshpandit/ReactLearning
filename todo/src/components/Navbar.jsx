import React from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";


const Navbar = () => {
  return (
    <nav className="flex justify-around bg-yellow-400 p-4 text-white items-center shadow" >
       <div className='flex gap-10'> <h1 className='text-2xl font-bold cursor-pointer text-shadow-md'>TO DO App</h1>   
       <span className='text-lg text-center'>A simple To Do app built with React</span>    </div>
      <ul className='flex gap-4 items-center'>
        <li className=' font-bold cursor-pointer'>Home</li>
        <li className=' font-bold cursor-pointer'>About</li>
       <li>
  <div className='p-1 border-2 rounded-full flex gap-2 items-center hover:cursor-pointer transition duration-200' >
    <MdOutlineLightMode />
    <MdOutlineDarkMode />
    </div>
</li>

        </ul>
    </nav>
  )
}

export default Navbar
