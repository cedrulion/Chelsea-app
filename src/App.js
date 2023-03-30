import React, { Component } from 'react';

// import './App.css';


import { Route,Routes } from 'react-router-dom';
import Shop from './components/Shop';
import Homepage from './components/Homepage';
import Players from './components/Players';
import Create from './components/Create'
import News from './components/News';
import Footer from './components/Footer';
import Header from './components/Header'
import Cfooter from './components/Cfooter'

class App extends Component {


  render(){



    return (
    <div className="App">
   
      {/* <Routes>
              <Route path="/Homepage" element={<Homepage/>}></Route>
              
              <Route path="/Shop" element={<Shop/>}></Route>
              <Route path="/Players" element={<Players/>}></Route>
              <Route path="/" element={<Homepage/>}></Route>
              <Route path="/Create" element={<Create/>}></Route>
              <Route path="/News" element={<News/>}></Route>
              
            
              
            </Routes> */}
            <Header/>
            <Cfooter/>
            
        
          </div>      
        
        
          
    
    
      
  );
  }
}

export default App;
