import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <div className="flex flex-col h-screen">
        <nav  className="sidebar fixed top-0 bottom-0 lg:left-0 p-2  lg:w-[300px] md:left-1 overflow-y-auto text-center bg-gray-900">
          <div className="flex items-center h-16">
            <span className="font-semibold text-xl tracking-tight">My Dashboard</span>
          </div>
          <div className="mt-6">
            <ul className="space-y-1 text-gray-300 text-sm">
              <li className="py-2 hover:bg-gray-700 rounded">
                <Link to="/Dashboard" className="block pl-3 pr-4 py-2 transition duration-300 ease-in-out hover:text-white">
                  HOME
                </Link>
              </li>
              <li className="py-2 hover:bg-gray-700 rounded">
                <Link to="/Create" className="block pl-3 pr-4 py-2 transition duration-300 ease-in-out hover:text-white">
                  ADD
                </Link>
              </li>
              <li className="py-2 hover:bg-gray-700 rounded">
                <Link to="/Players" className="block pl-3 pr-4 py-2 transition duration-300 ease-in-out hover:text-white">
                  Players
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="flex flex-col flex-1">
          <div className="bg-gray-100 px-4 py-3 flex justify-end">
            <div className="flex max-w-full">
              <input className="appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Search"/>
              <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-r">
                Search
              </button>
            </div>
          </div>
          <div className="flex-grow flex items-center justify-center">
            <h1 className="text-4xl">Welcome to My Dashboard</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
