import React, { Component } from 'react'
import Cdata from './database/data.json'
import { Dropdown } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
class Countries extends Component {
  constructor() {
    super();
    this.state = {
      DarkMode: false,
      searchString: '',


    };
  }
  toogleDarkMode = () => {
    this.setState(nexttheme => ({
      DarkMode: !nexttheme.DarkMode
    }));
  }

  componentDidMount() {
    this.setState({ data: Cdata })
  }



  searchHandler = (e) => {

    const searchString = e.target.value.toLocaleLowerCase();
    this.setState({ searchString: searchString })
  }
  render() {
    const DarkMode = this.state.DarkMode;


    const newData = Cdata.filter(country => {

      return country.name.toLocaleLowerCase().includes(this.state.searchString)
    });


    return (
      <div className={`${DarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <div className='grid lg:grid-cols-4  md:grid-cols-2 justify-end p-9 bg-white-800 text-white-900 '>
          {console.log(this.state.searchString)}
          <div class=" fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center">

            <input type="text" className='h-6 bg-white-600 bi bi search text-sm' placeholder='search for country...' onChange={this.searchHandler} /> <br />
          </div>
          {newData.map((dataitem) => (

            <div>
              <img src={dataitem.flag} className='h-20 p-3 '></img>
              <p>{dataitem.name}</p>
              <p>population:{dataitem.population}</p>
              <p>region:{dataitem.region}</p>
              <p>capital:{dataitem.capital}</p>

            </div>

          ))}
          <div class="sidebar fixed top-0 bottom-0 sm:right-0 lg:right-0 p-2 w-[300px] overflow-y-auto text-center  ">

            <button onClick={this.toogleDarkMode}>{DarkMode ? 'DARK-OFF' : 'DARK-ON'}</button> <br />

            <Dropdown title="Filter by region" >
              <Dropdown.Item>
                Africa
              </Dropdown.Item>
              <Dropdown.Item>
                America
              </Dropdown.Item>
              <Dropdown.Item>
                Asia
              </Dropdown.Item>
              <Dropdown.Item>
                Europe
              </Dropdown.Item>
              <Dropdown.Item>
                Oceania
              </Dropdown.Item>
            </Dropdown>

          </div>
        </div>
      </div>
    )
  }
}

export default Countries
