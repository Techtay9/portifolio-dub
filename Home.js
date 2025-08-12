import React from 'react'
import './home.css';
import HomeImage from '../assets/home.jpg'

const Home = () => {
  return (
    <div
    className="flex items-center justify-end bg-cover bg-center h-[600px] w-full"
     style={{ backgroundImage: `url(${HomeImage})` }}
    >

      <div className="home-text mr-16 max-w-md text-right ">
       <h1 className="text-3xl font-curly font-semibold mb-4">hi I'm déjà Vu</h1>
        <h2 className="text-4xl  font-semibold mb-2">FrontEnd Web <br /> Developer</h2>
        <p className="text-lg mb-4 font-bold ">
         I'm a front end web developer, I'll help you build <br /> beautiful 
          websites your users will love.
        </p>
        <button className="bg-green-500 hover:bg-green-600 font-serif text-white py-2 px-4 rounded-full">
        CONTACT US
        </button>
      </div>
      
    </div>
  )
}

export default Home
