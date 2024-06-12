import React, { useState } from 'react'
import { Cookingoil } from './Cookingoil/Cookingoil'
import {Dryfruits} from './Dryfruits/Dryfruits'
import { Flours } from './Flours/Flours'
import { Masala } from './Masala & Spices/Masala'
import { Pulses } from './Pulses/Pulses'
import { SaltSugarJaggery } from './Salt-Sugar-Jaggery/Salt-Sugar-Jaggery'


import SideBar from "../../customer/Components/Sidebar/Sidebar"
import Navbar from '../../customer/Components/Navbar/Navbar'


const sidebarDairy = [
  {
    name:'All Grocery',
    subCatog:[]
  },
  {
    name:'Dry Fruits',
    subCatog:['Almonds','Cashcws',"pista", "Dates",  "Raisins",  "Walnuts","Mixed Dryfruits","Charoli","Makhana",    "Anjeer"]
  },
  {
    name:'Flours',
    subCatog:["Sunflower Oil", "Groundnut Oil", "Blended Oil", "Rice Bran Oil","Mustard Oil",    "Olive Oil", "Other Oils"]
  },
  {
    name:'Masala & Spices',
    subCatog:["Whole Spices", "Powdered Spices", "Chilli Powder","Turmeric Powder","Coriander Powder", "Cooking Pastes","Herbs & Seasonings","Ready Mix Masalas"
, "Food Essence"]
  },
  {
    name:'Pulses',
    subCatog:[ "Rajma","Chowli","Soya Products","Kabuli Chana","Chana",   "Urad", "Moong", "Masoor", "Vatana","Other Whole Pulses","Groundnut"]
  },
  {
    name:'Salt & Sugar',
    subCatog:["Salt","Sugar"]
  },
  {
    name:'Cooking Oil',
    subCatog:["Sunflower Oil", "Groundnut Oil","Blended Oil","Rice Bran Oil", "Mustard Oil","Olive Oil","Other Oils"
  ]
  }
]
function Grocery() {
  const [activeTab,setActiveTab] = useState("All Grocery")
  return (
    <div>
      <Navbar/>
      <div className=' flex gap-6 font-semibold'>
        
        <SideBar setActiveTab={setActiveTab} activeTab={activeTab}  title={"Grocery"}  sidebarDairy={sidebarDairy} key={'2'}/>
        {activeTab==="All Grocery" ? <div className='flex flex-wrap   w-full'>
          <Dryfruits/>
          <Flours/>
          <Masala/>
          <Pulses/>
          <SaltSugarJaggery/>
        </div>:""}
        
        {activeTab==="Dry Fruits" ? <Dryfruits />:""}
        {activeTab==="Flours" ? <Flours />:""}
        {activeTab==="Masala & Spices" ? <Masala/>:""}
        {activeTab==="Pulses" ? <Pulses/>:""}
        {activeTab==="Salt & Sugar" ? <SaltSugarJaggery/>:""}
        {activeTab==="Cooking Oil" ? <Cookingoil/>:""}
        
      </div>
    
    </div>
  )
}

export default Grocery
