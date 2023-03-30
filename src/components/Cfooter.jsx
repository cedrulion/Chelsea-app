import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Cfooter() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <img src="https://assets.radissonhotels.com/image/upload/c_scale,dpr_auto,f_auto,h_140,q_auto,w_auto/v1621400455/radissonhotels/logo/logos-dark-bg.svg" alt="Radisson Hotels logo" className="h-10 mb-4" />
            <p className="text-sm text-gray-600 leading-loose">Radisson Hotels is a leading hospitality company serving as a true host and best partner to guests, owners, business partners and talent.</p>
            <div className="flex mt-4">
              <a href="#" className="text-gray-600 hover:text-gray-800 mr-4"><FaFacebook /></a>
              <a href="#" className="text-gray-600 hover:text-gray-800 mr-4"><FaTwitter /></a>
              <a href="#" className="text-gray-600 hover:text-gray-800 mr-4"><FaInstagram /></a>
              <a href="#" className="text-gray-600 hover:text-gray-800"><FaYoutube /></a>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Brands</h4>
            <ul className="text-sm text-gray-600 leading-loose">
              <li className="mb-2"><a href="#">Radisson Collection</a></li>
              <li className="mb-2"><a href="#">Radisson Blu</a></li>
              <li className="mb-2"><a href="#">Radisson</a></li>
              <li className="mb-2"><a href="#">Radisson RED</a></li>
              <li className="mb-2"><a href="#">Park Plaza</a></li>
              <li className="mb-2"><a href="#">Park Inn by Radisson</a></li>
            </ul>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Locations</h4>
            <ul className="text-sm text-gray-600 leading-loose">
              <li className="mb-2"><a href="#">Africa</a></li>
              <li className="mb-2"><a href="#">Asia Pacific</a></li>
              <li className="mb-2"><a href="#">Europe</a></li>
              <li className="mb-2"><a href="#">Middle East</a></li>
              <li className="mb-2"><a href="#">North America</a></li>
              <li className="mb-2"><a href="#">South America</a></li>
            </ul>
          </div>
         </div>
           
        </div>
     </footer>   
  );
}


export default Cfooter;