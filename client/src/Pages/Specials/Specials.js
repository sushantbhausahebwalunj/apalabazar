import React, { useState } from 'react';


import SideBar from '../../customer/Components/Sidebar/Sidebar';
import Navbar from '../../customer/Components/Navbar/Navbar';
import {ValuePack} from './ValuePack';
import { DiscoverMore } from './DiscoverMore';


const sidebarDairy = [
  {
    name: 'Value & Packs',
    subCatog: []
  },
  {
    name: 'Discover More',
    subCatog: []
  },
  
];

function Specials() {
  const [activeTab, setActiveTab] = useState('Value & Packs');
  const [activeSubTab, setActiveSubTab] = useState('');
  const [showall,setShowAll] = useState(true);



  return (
    <div>
      <Navbar setActiveTab={setActiveTab}/>
      <div className='flex flex-col lg:flex-row gap-6 font-semibold'>
          <SideBar title={"Specials"}  showall={showall} setShowAll={setShowAll} setActiveSubTab={setActiveSubTab} setActiveTab={setActiveTab} activeTab={activeTab}  sidebarDairy={sidebarDairy} key={'2'} />
        <div className='overflow-hidden'>
        
        {/* {activeTab === 'Value & Packs' ? (
          <div className='flex flex-wrap w-full'>
            
          </div>
        ) : null} */}

        {activeTab === 'Value & Packs' ? <ValuePack showall={showall} activeSubTab={activeSubTab} setActiveTab={setActiveSubTab} /> : null}
        {activeTab === 'Discover More' ? <DiscoverMore showall={showall} activeSubTab={activeSubTab} setActiveTab={setActiveSubTab} /> : null}
        </div>
      
    </div>
    </div>
  );
}

export default Specials;
