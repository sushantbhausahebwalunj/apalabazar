import React, { useState } from 'react'
import { Cookingoil } from './Cookingoil/Cookingoil'
import {Dryfruits} from './Dryfruits/Dryfruits'
import { Flours } from './Flours/Flours'
import { Masala } from './Masala & Spices/Masala'
import { Pulses } from './Pulses/Pulses'
import { SaltSugarJaggery } from './Salt-Sugar-Jaggery/Salt-Sugar-Jaggery'


import SideBar from "../../customer/Components/Sidebar/Sidebar"
import Navbar from '../../customer/Components/Navbar/Navbar'


const sidebarDairy = ["All Grocery","Dry Fruits","Flours","Masala & Spices","Pulses","Salt/Sugar","Cooking Oil"]
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
        {activeTab==="Salt/Sugar" ? <SaltSugarJaggery/>:""}
        {activeTab==="Cooking Oil" ? <Cookingoil/>:""}
        
      </div>
    
    </div>
  )
}

export default Grocery
