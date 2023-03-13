import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navs extends Component {
  render() {
    return (
      <div>
      <nav className="bg-blue-900 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-white font-bold text-xl">Chelsea FC</a>
          <button className="text-white focus:outline-none md:hidden">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <div className="hidden md:block">
            <Link to="/Homepage" className="text-white font-semibold mx-4 hover:text-gray-200">Home</Link>
            <Link to="/News" className="text-white font-semibold mx-4 hover:text-gray-200">News</Link>
            <Link to="/Players" className="text-white font-semibold mx-4 hover:text-gray-200">Players</Link>
            <Link to="/Shop" className="text-white font-semibold mx-4 hover:text-gray-200">Shop</Link>
          </div>
        </div>
      </nav>
      </div>
    );
  }
}

export default Navs;
