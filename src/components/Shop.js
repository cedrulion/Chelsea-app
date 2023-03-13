import React, { Component } from 'react'
import chelsea1 from './chelsea1.jpg';
import chelsea2 from './chelsea2.jpg';
export class Shop extends Component {
  render() {
    return (
     
       <div class="container mx-auto py-4 px-2 bg-blue-800">
       <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-800">
         <div class=" hover:scale-105 bg-white shadow-md p-4">
           <img src={chelsea1}/>
           <h1 class="text-lg font-medium text-black-800 mb-4 text-center">kits available now</h1>
        <button class="bg-sky-500/100 text-white p-3 rounded-xl">BUY</button>
           <p class="text-black-500">finibus.Donecvelexamassacommodobibendum
           .Integeractristiquesapien.</p>
         </div>
         <div class=" hover:scale-105 bg-white shadow-md p-4">
           <img src={chelsea1} alt="hh"/>
           <h1 class="text-lg font-medium text-black-800 mb-4 text-center">kits available now</h1>
        <button class="bg-sky-500/100 text-white text-center p-3 rounded-xl">BUY</button>
           <p class="text-black-500 text-center">finibus.Donecvelexamassacommodobibendum
           .Integeractristiquesapien.</p>
         </div>
         <div class="hover:scale-105 bg-white shadow-md p-4 items-center">
         <img src={chelsea2}  />
         <h1 class="text-lg font-medium text-black-800 mb-4 text-center">kits available now</h1>
        <button class="bg-sky-500/100 text-white p-3 rounded-xl">BUY</button>
           <p class="text-black-500">Loremiednibhtinciduntfinibus.Donecvelexamassacommodobibendum
           .Intege
           ractristiquesapien.</p>
         </div>
         <div class="hover:scale-105 bg-white shadow-md p-4">
         <img src={chelsea2}  />
         <h1 class="text-lg font-medium text-black-800 mb-4 text-center"> kits available now</h1>
        <button class="bg-sky-500/100 text-white p-3 rounded-xl">BUY</button>
           <p class="text-black-700">Loremiednibhtinciduntfinibus.Donecvelexamassacommodobibendum
           .Intege
           ractristiquesapien.</p>
         </div>

       </div>
       
     </div>
     
    )
  }
}

export default Shop
