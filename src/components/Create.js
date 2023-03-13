import React, { useState } from 'react'

function Create() {
  const [Player,setPlayer] = useState('');
  const [Salary,setSalary] = useState('');
  const [Age,setAge] = useState('');
  const [Pic,setPic] = useState('');

  const handlesubmit = (e)=>{
    e.preventDefault();
    console.log(Player);
    fetch('http://localhost:3000/Cards',{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        Player:Player,
        Salary:Salary,
        Age: Age,
        Pic: Pic
      }),
     }
   )
  }
 
  return (
    <div className="py-4 px-2 bg-cyan-900 flex flex-end w-13 justify-center">
      <form action="" className="p-20">
        <div className="mb-4">
          <label htmlFor="player" className="block text-white font-bold mb-2">Player:</label>
          <input 
            value={Player} 
            onChange={(e)=> setPlayer(e.target.value)} 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" 
            placeholder="Player"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="salary" className="block text-white font-bold mb-2">Salary:</label>
          <input 
            value={Salary} 
            onChange={(e)=> setSalary(e.target.value)} 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" 
            placeholder="Salary"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-white font-bold mb-2">Age:</label>
          <input 
            value={Age} 
            onChange={(e)=> setAge(e.target.value)} 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number" 
            placeholder="Age"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pic" className="block text-white font-bold mb-2">Pic:</label>
          <input 
            value={Pic} 
            onChange={(e)=> setPic(e.target.value)} 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" 
            placeholder="Pic"
          />
        </div>
        <button 
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          type="submit"
          onClick={handlesubmit}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Create
