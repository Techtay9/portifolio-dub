import React from 'react'
import './about.css';
import AboutImage from '../assets/about.jpg';
import { FaBriefcase } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";


const About = () => {
  return (
    <div className='about'>
      <h1 className='text-5xl mt-4 font-bold font-curly '>About Me..</h1>

      <p className='mt-4 font-curly font-semibold text-gray-600 text-lg'>Developing beautiful and functional websites is what i love doing, that is why i give my all in every project I work on. <br />
        I have at least 2 years of experience in web development,and I'm always eager to learn more and improve my skills. <br />
        I have a passion for creating user-friendly interfaces and ensuring that websites are not only visually appealing but also easy to  navigate.
      </p>

      <div
      className='flex items-center justify-end bg-cover bg-center h-[400px] w-full mt-4 '
      style={{ backgroundImage: `url(${AboutImage})` }}
      >
        <div className='mr-16 text-right max-w-md text-gray-500 font-curly'>
          <h1 className='text-7xl mb-4'>Skills</h1>
          <ul className='text-lg space-x-2 '>
            <li>Html <span className="ml-2 bg-gray-400 text-black px-2 py-1 rounded text-sm shadow-lg">100%</span>  </li>
            <li>CSS  <span className="ml-2 bg-gray-400 text-black px-2 py-1 rounded text-sm shadow-lg">100%</span></li>
            <li>JavaScript  <span className="ml-2 bg-gray-400 text-black px-2 py-1 rounded text-sm shadow-lg">80%</span></li>
            <li>React.js  <span className="ml-2 bg-gray-400 text-black px-2 py-1 rounded text-sm shadow-lg">50%</span></li>
            <li>Tailwind CSS  <span className="ml-2 bg-gray-400 text-black px-2 py-1 rounded text-sm shadow-lg">100%</span></li>
          </ul>
        </div>

      </div>

       {/*---card section--*/}

      <div className='flex items-center  bg-cover bg-center h-[200px] w-full bg-gray-300'>
        <div className='flex  m-8 ml-32 text-center justify-center items-center space-x-24 '>

          <div className='flex items-center space-x-4'>
            <div className='text-4xl '>
              <FaBriefcase />
            </div>

            <div className='text-left'>
              <h2 className='font-curly font-bold'>548</h2>
             <p className='font-semibold '>Project Completed</p>
            </div> 
          </div>


          <div className='flex items-center space-x-4'>
            <div className='text-4xl '>
              < CiClock2/>
            </div>

            <div className='text-left'>
              <h2 className='font-curly font-bold'>1468</h2>
             <p className='font-semibold '>Working hours</p>
            </div> 
          </div>


          <div className='flex items-center space-x-4'>
            <div className='text-4xl '>
              <CiStar/>
            </div>

            <div className='text-left'>
              <h2 className='font-curly font-bold'>612</h2>
             <p className='font-semibold '>Positive Feedbacks</p>
            </div> 
          </div>


          <div className='flex items-center space-x-4'>
            <div className='text-4xl '>
              <CiHeart />
            </div>

            <div className='text-left'>
              <h2 className='font-curly font-bold'>735</h2>
             <p className='font-semibold '>Happy Clients</p>
            </div> 


          </div>
      
        </div>


      </div>

      



      
  
      
    </div>
  )
}

export default About
