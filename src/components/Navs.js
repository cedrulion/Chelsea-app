import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi'

class Navs extends Component {
  constructor(){
    super();
    this.state={
      open:false
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
      <nav className="bg-blue-900 py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-white font-bold text-xl">Chelsea FC</a>
          <button onClick={()=>this.setState({open:!this.state.open})} className=" text-white focus:outline-none md:hidden sm:block">
           <GiHamburgerMenu/>
          </button>
          
          <div className="hidden md:block">
            <Link to="/Homepage" className="text-white font-semibold mx-4 hover:text-gray-200">Home</Link>
            <Link to="/News" className="text-white font-semibold mx-4 hover:text-gray-200">News</Link>
            <Link to="/Players" className="text-white font-semibold mx-4 hover:text-gray-200">Players</Link>
            <Link to="/Shop" className="text-white font-semibold mx-4 hover:text-gray-200">Shop</Link>
          </div>
        </div>
      </nav>
      {this.state.open&& 
      <ul className="block min-h-screen px-8 text-black py-8 text-center">
       <li className='my-4'><Link to="/Homepage" className=" font-semibold mx-4 hover:text-gray-200 ">Home</Link></li> 
       <li className='my-4'> <Link to="/News" className=" font-semibold mx-4 hover:text-gray-200">News</Link></li> 
       <li className='my-4'> <Link to="/Players" className="font-semibold mx-4 hover:text-gray-200">Players</Link></li> 
       <li className='my-4'> <Link to="/Shop" className=" font-semibold mx-4 hover:text-gray-200">Shop</Link></li> 
      </ul>
    }
https://1c452a5c.chelsea-app.pages.dev
      </div>
    );
  }
}

export default Navs;
