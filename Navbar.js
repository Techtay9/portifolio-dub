import React from 'react'
import './navbar.css'
import { IoChatbubbleEllipses } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>

        <nav  className='navbar'>
            <h1 className='font-bold font-curly text-3xl text-black
            '>déjà Vu..</h1>


            <div className='links'>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#project">Project</a>
              
            </div>


            <div className='text-4xl cursor-pointer text-black'>
              < IoChatbubbleEllipses/>
            </div>
        </nav>
      

      

    </div>
  )
}

export default Navbar
