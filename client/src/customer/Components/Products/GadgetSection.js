import React from 'react';
import Gadgets from './Gadget';
import OtherComponent from './OtherComponent';


const GadgetSection = ({advertisements, status}) => {
    return (
      <div className=" sm:m-1 sm:p-2 flex flex-wrap ">
        <div className="w-full lg:w-1/2 mt-2  p-0 sm:p-3 ">
          <Gadgets advertisements={advertisements} status={status}/>
        </div>
        <div className="w-full lg:w-1/2 p-0 mt-2 sm:p-3 ">
          <OtherComponent advertisements={advertisements} status={status} />
        </div>
      </div>
    );
  };
  
  export default GadgetSection;