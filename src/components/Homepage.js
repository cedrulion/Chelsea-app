import React, { Component } from 'react'
import Navs from './Navs';
import Stamfo from './Stamfo.jpg'
import Footer from './Footer'
export class Homepage extends Component {
  render() {
    return (
      <div className="bg-gray-100 min-h-screen ">
        <Navs/>
        <div className="container mx-auto py-8 px-4 md:px-0 md:max-w-3xl w-full h-full">
         <div className='relative max-w-3xl'>
          <img src={Stamfo} alt="" className='object-cover'/>
          <div className='absolute bottom-0 sm:bottom-10 text-white px-4 py-2'>
          <h1 className="lg:text-5xl sm:text-sm font-bold ">Welcome to Chelsea FC</h1>
          <p className="text-white lg:text-xl sm:text-xs ">We are a professional football club based in London, England. Founded in 1905, we have</p>
          <p className="text-white lg:text-xl sm:xs">a rich history and a passionate fan base.</p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Learn More</button>
          </div>
          </div>
          </div>
          <Footer/>
      </div>
    )
  }
}

export default Homepage
