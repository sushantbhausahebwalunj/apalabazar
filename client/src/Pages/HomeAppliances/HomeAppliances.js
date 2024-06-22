import React, { useState } from 'react';


import SideBar from '../../customer/Components/Sidebar/Sidebar';
import Navbar from '../../customer/Components/Navbar/Navbar';
import { LightBatteries } from './LightBatteries/LightBatteries';

const sidebarDairy = [
  {
    name: 'Home Appliances',
    subCatog: ['Light & Batteries']
  }
];

function HomeAppliances() {
  const [activeTab, setActiveTab] = useState('Home Appliances');
  const [activeSubTab, setActiveSubTab] = useState('');
  const [showall,setShowAll] = useState(true);




  return (
    <div>
      <Navbar />
      <div className='flex flex-col lg:flex-row gap-6 font-semibold'>
        <SideBar title={"Appliances"} showall={showall} setShowAll={setShowAll} setActiveSubTab={setActiveSubTab} setActiveTab={setActiveTab} activeTab={activeTab}  sidebarDairy={sidebarDairy} key={'2'} />
        
    <div className='overflow-hidden'>
      
        {activeTab === 'Home Appliances' ? <LightBatteries showall={showall} activeSubTab={activeSubTab} setActiveTab={setActiveSubTab} /> : null}
    </div>
      
    </div>
    </div>
  );
}

export default HomeAppliances;
