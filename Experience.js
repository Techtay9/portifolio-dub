import React from 'react'
import './experience.css'
import ExperienceImage from '../assets/ex.jpg';
import Apple from '../assets/apple.webp';
import Microsoft from '../assets/microsoft.webp';
import Scoopies from '../assets/scoopies.webp';
import Spotify from '../assets/spotify.webp';

const Experience = () => {
  return (
    <div className='experience'>
        <h1 className='font-curly text-5xl font-bold '>My Experience..</h1>
        <p className='mt-4 font-semibold font-curly text-lg'>I'm, a passionate and creative Front-End Web Developer with a strong eye for UI design and a knack for engaging content creation. <br /> 
            With 2 years of industry experience, I've collaborated with multiple companies to build sleek, user-friendly websites and deliver content that connects and converts.
            <br /> My skill set blends technical precision with aesthetic sensibility—ensuring that every pixel has a purpose. <br />
             I specialize in translating concepts into responsive designs that not only look great but function beautifully across devices.
        </p>



        <div
        className='flex items-center justify-end bg-cover bg-center h-[380px] w-full mt-4 '
        style={{ backgroundImage: `url(${ExperienceImage})` }}
        >

        </div>

      <div className=' bg-gray-100 '>
          <div className=' items-center justify-center  '>
            <h1 className=' font-curly pt-4  text-3xl font-bold'>Work Experience</h1>
            
           <div className='flex space-x-10 items-center justify-center mt-4 '>
            <img src={Apple} className=' rounded-full w-32 h-32' alt="" />


               <h2 className='font-curly font-bold text-3xl '> FrontEnd Developer @ Apple</h2>
               <p className=' text-lg font-semibold font-serif  '>2024 till present</p>
            </div> 



            <div className='flex space-x-10 items-center justify-center mt-4 '>
            <img src={Microsoft} className=' rounded-full w-32 h-32' alt="" />


               <h2 className='font-curly font-bold text-3xl '> FrontEnd Intern @ Microsoft </h2>
               <p className=' text-lg font-semibold font-serif  '>2020-2023</p>
            </div>


            <div className='flex space-x-10 items-center justify-center mt-4 '>
            <img src={Scoopies} className=' rounded-full w-32 h-32' alt="" />


               <h2 className='font-curly font-bold text-3xl '> FrontEnd Developer @ Scoopies Cream.</h2>
               <p className=' text-lg font-semibold font-serif  '>2019-2020</p>
            </div>  

            
            
            <div className='flex space-x-10 items-center justify-center mt-4 '>
            <img src={Spotify} className=' rounded-full w-32 h-32' alt="" />


               <h2 className='font-curly font-bold text-3xl '> FrontEnd Developer Intern @ Spotify</h2>
               <p className=' text-lg font-semibold font-serif  '>2017-2018</p>
            </div> 
            
        </div>
      </div>
    </div>
  )
}

export default Experience
