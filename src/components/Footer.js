import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto flex justify-between">
          <div className=" items-center">
            <img src="/logo.svg" alt="Logo" className="h-10" />
            <h1 className="ml-2 font-bold text-lg text-gray-400">Chelsea FC</h1>
            <h1 className="ml-2 font-bold text-lg text-gray-400">Stamford Bridge</h1>
            <h1 className="ml-2 font-bold text-lg text-gray-400">Fulham Road</h1>
            <h1 className="ml-2 font-bold text-lg text-gray-400">London</h1>
          </div>
          <nav className=" items-center">
           
            
            <a href="#" className="text-gray-400 hover:text-white ml-6">Contact Us</a>
            <h1 className="ml-2 font-bold text-gray-400 text-lg">Freuently Asked Questions</h1>
          </nav>
        </div>
      </footer>
    );
  }
}

export default Footer;

