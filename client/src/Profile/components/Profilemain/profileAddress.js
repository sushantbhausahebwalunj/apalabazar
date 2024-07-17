import React from 'react';

const addressCardClasses = "bg-white p-4 rounded-lg shadow-md border-[1px] border-gray-300 hover:shadow-lg transition duration-300";
const buttonClasses = "text-muted-foreground hover:text-foreground transition duration-300";

const AddressCard = ({ type, name, phone, address }) => {
  return (
    <div className={addressCardClasses}>
      <div className="flex justify-between items-center">
        <div>
          <span className="bg-green-200 text-secondary-foreground px-2 py-1 rounded-md text-xs">{type}</span>
          <h3 className="text-md font-semibold text-foreground mt-2">{name}</h3>
          <p className="text-muted-foreground">{phone}</p>
          <p className="text-muted-foreground">{address}</p>
        </div>
        <button className={buttonClasses}>
          <img aria-hidden="true" alt="more-options" src="https://openui.fly.dev/openui/24x24.svg?text=⋮" />
        </button>
      </div>
    </div>
  );
};

const AddressList = () => {
  return (
    <div className="space-y-4">
      <AddressCard
        type="Home"
        name="John Doe"
        phone="1234567890"
        address="123 Main St, Springfield, IL, 62701"
      />
      <AddressCard
        type="Office"
        name="Jane Smith"
        phone="0987654321"
        address="456 Elm St, Springfield, IL, 62701"
      />
      <AddressCard
        type="Billing"
        name="Michael Johnson"
        phone="1122334455"
        address="789 Oak St, Springfield, IL, 62701"
      />
      <AddressCard
        type="Shipping"
        name="Emily Davis"
        phone="6677889900"
        address="101 Maple St, Springfield, IL, 62701"
      />
      <AddressCard
        type="Home"
        name="Chris Brown"
        phone="2233445566"
        address="202 Pine St, Springfield, IL, 62701"
      />
    </div>
  );
};

const ProfileAddress = () => {
  return (
    <div className="p-4">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-foreground">Manage Addresses</h2>
          <button className="bg-primary border-blue-500 border-[2px] text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/80 hover:font-semibold transition duration-300">
            + Add a New Address
          </button>
        </div>
        <AddressList />
      </div>
    </div>
  );
};

export default ProfileAddress;
