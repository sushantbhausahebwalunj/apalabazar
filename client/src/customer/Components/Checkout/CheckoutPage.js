import React,{useState} from 'react';
import AddressDialog from '../adreess/AddressDialog';

export default function Checkout(){

    const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [addresses, setAddresses] = useState([]);

   const handleAddNewAddress = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleSaveAddress = (newAddress) => {
    setAddresses([...addresses, newAddress]);
  };

  return (
    <div className='bg-gradient-to-br from-violet-500 to-orange-300'>
      <h1 className="text-2xl  font-bold mb-4 py-7 max-w-[760px] mx-auto">Checkout</h1>
    <div className="flex flex-col max-w-[800px] w-[3/4] gap-12 justify-center  mx-auto p-4">
      <div className=" bg-white/30 backdrop-blur-lg rounded-lg shadow-lg p-6">
        <DeliveryMode />
        <SavedAddresses setAddresses={setAddresses} onAddNewAddress={handleAddNewAddress}
          addresses={addresses} />
        <TimeSlot />
      </div>
      <PriceSummary />
      <AddressDialog  isOpen={isDialogOpen}
        onClose={handleDialogClose}
        onSave={handleSaveAddress}/>
    </div>
    </div>
  );
};


const DeliveryMode = () => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Select a delivery mode</h2>
      <div className="flex items-center mb-2">
        <input type="radio" id="home-delivery" name="delivery-mode" className="mr-2" checked />
        <label htmlFor="home-delivery" className="flex items-center">
          <span className="mr-2">🏠 Home Delivery</span>
          <span className="line-through mr-2 text-red-500">₹29.00</span>
          <span className="text-green-500">₹0</span>
        </label>
      </div>
    </div>
  );
};


const SavedAddresses = ({setAddresses, onAddNewAddress, addresses }) => {
 return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Saved addresses</h2>
      {addresses.length > 0 ? (
        addresses.map((address, index) => (
          <div key={index} className=" p-4 rounded mb-2">
            <p>{address.addressLine1}</p>
            <p>{address.addressLine2}</p>
            <p>{address.city}, {address.state} - {address.zipCode}</p>
           
          </div>
        ))
      ) : (
        <div className="border border-dashed border-gray-400 p-4 rounded">
          <p className="text-gray-600 mb-2">You don't have any saved address. Try adding a new address</p>
        </div>
      )}
      <div className='my-4 flex'>
        <div className='p-[1px] rounded-lg w-fit bg-gradient-to-br from-violet-500 to-orange-300'>
          <button
        className="text-blue-500 backdrop-blur-lg bg-white/30 border p-2 rounded-lg  "
        onClick={onAddNewAddress}
      >
        + Add New Address
      </button>
        </div>
     
       <button onClick={() => {
                setAddresses("")
            }} className='p-2 bg-black text-white rounded-md mx-2'>Clear All address</button>
      </div>
    </div>
  );
};


const TimeSlot = () => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Select a time slot</h2>
      <input className='border borer-black p-2 bg-gray-200  rounded-lg font-thin' type='datetime-local'/>
    </div>
  );
};






const PriceSummary = () => {
  return (
    <div className="bg-white/40 backdrop-blur-xl rounded-lg shadow-lg p-6 mt-6">
      <h2 className="text-xl font-semibold mb-2">Price Summary</h2>
      <div className="flex justify-between mb-2">
        <span>You Pay</span>
        <span className="text-green-500">₹276</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Cart Total</span>
        <span>₹276</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Delivery charge</span>
        <div className='space-x-3'>
            <span className="text-red-500 line-through">₹29</span>
        <span className="text-green-500">₹0</span>
        </div>
      </div>
      <div className="flex justify-between mb-2">
        <span>Your Savings</span>
        <span className="text-orange-500">₹144</span>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-4 flex-wrap items-center mt-4">
        <button className="bg-gray-200 text-black px-4 py-2 rounded cursor-not-allowed" disabled>
          PAY ON DELIVERY (COD)
        </button>
        <p>or</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">PAY NOW (PREPAID)</button>
      </div>
    </div>
  );
};



