import React, { Component } from "react";
import Pdata from "./database/new.json";
import Navs from "./Navs";

export class List extends Component {
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
      <div className="flex">
        <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
          <Navs />
        </div>
        <div className="flex flex-wrap justify-center p-9 w-full max-w-screen-lg">
          <div className="w-full md:w-1/3 p-2">
            <input
              type="text"
              className="h-10 border border-gray-400 rounded-md py-2 px-3 w-full leading-tight focus:outline-none focus:border-gray-500"
              placeholder="Search for a player..."
              onChange={this.searchHandler}
            />
          </div>
          {playerData.map((chelsea) => (
            <div key={chelsea.index} className="w-full md:w-1/3 p-2">
              <div className="bg-white rounded-md shadow-md p-4">
                <img
                  src={chelsea.Pic}
                  className="h-auto mx-auto mb-4"
                  alt={chelsea.Player}
                />
                <h2 className="text-lg font-semibold mb-2">
                  {chelsea.Player}
                </h2>
                <p className="text-sm mb-2">{chelsea.Age}</p>
                <p className="text-sm mb-4">{chelsea.Salary}</p>
                <button
                  className="bg-red-700 text-white py-2 px-4 rounded-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
                  onClick={() => this.handleDelete(chelsea.index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default List;
