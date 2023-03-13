import React, { Component } from "react";
import Pdata from "./database/new.json";
import Navs from "./Navs";
import Footer from "./Footer";
import { Link } from 'react-router-dom';


export class Players extends Component {
  constructor() {
    super();
    this.state = {
      searchString: "",
    };
  }

  componentDidMount() {
    this.setState({ data: Pdata });
  }

  searchHandler = (e) => {
    const searchString = e.target.value.toLowerCase();
    this.setState({ searchString: searchString });
  };

  handleDelete = (index) => {
    const newData = [...this.state.data.Cards];
    newData.splice(index, 1);
    this.setState({ data: { Cards: newData } });
  };

  render() {
    const playerData = Pdata.Cards.filter((play, index) => {
      play.index = index;
      return play.Player.toLowerCase().includes(this.state.searchString);
    });

    return (
      <div className="bg-gray-100 min-h-screen">
       <Navs/>
          <div>
            <input
              type="text"
              className="h-10 border border-gray-400 rounded-md py-2 px-3 text-center bg-cyan-700"
              placeholder="Search for a player..."
              onChange={this.searchHandler}
            />
          
                <Link to="/Create" > <button
                  className="bg-green-700 text-white py-2 px-4 rounded-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50" >
                  Register new player
                </button></Link>
            </div> 
          <div className="bg-gray-100 px-4 py-3 flex justify-end w-full">
          {playerData.map((chelsea) => (
            <div key={chelsea.index} className="w-50 md:w-1/3 p-2">
              <div className="bg-white rounded-md shadow-md p-4">
                <img
                  src={chelsea.Pic}
                  className="h-20 mx-auto mb-4"
                  alt={chelsea.Player}
                />
                <h2 className="text-lg font-semibold mb-2">
                  {chelsea.Player}
                </h2>
                <p className="text-sm mb-2">age:{chelsea.Age}</p>
                <p className="text-sm mb-4">salary:{chelsea.Salary}</p>
                <button
                  className="bg-red-400 text-white py-2 px-4 rounded-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
                  
                >
                  Midfielder
                </button>
              </div>
             
            </div>
          ))}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Players;
