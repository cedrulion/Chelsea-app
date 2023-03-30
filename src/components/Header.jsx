import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-700" href="#">Radisson Hotels</a>
          </div>
          <div className="flex md:hidden">
            <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path fillRule="evenodd" d="M21 18.999H3v-2h18v2zm0-6H3v-2h18v2zm0-6H3V4h18v2z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="md:flex md:items-center md:mx-6">
          <div className="flex flex-col md:flex-row md:mx-6">
            <a className="my-1 text-gray-700 hover:text-blue-600 md:mx-4 md:my-0" href="#">Rooms & Suites</a>
            <a className="my-1 text-gray-700 hover:text-blue-600 md:mx-4 md:my-0" href="#">Meetings & Events</a>
            <a className="my-1 text-gray-700 hover:text-blue-600 md:mx-4 md:my-0" href="#">Weddings</a>
            <a className="my-1 text-gray-700 hover:text-blue-600 md:mx-4 md:my-0" href="#">Restaurants & Bars</a>
            <a className="my-1 text-gray-700 hover:text-blue-600 md:mx-4 md:my-0" href="#">Spa & Wellness</a>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <a className="mr-3 text-gray-700 hover:text-blue-600" href="#">Sign In</a>
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="#">Book Now</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
