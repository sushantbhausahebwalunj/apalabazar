import React from 'react';


const gadgets = [
  {
    title: 'True Wireless',
    discount: 'Min. 50% Off',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIpDUjGPsRbpeKQFw7TFjrWJkaRxY68b2zA&s',
  },
  {
    title: 'Smart Bands',
    discount: 'Min. 40% Off',
    imageUrl: 'https://cdn.shopify.com/s/files/1/2303/2711/files/2_e822dae0-14df-4cb8-b145-ea4dc0966b34.jpg?v=1617059123',
  },
  {
    title: 'Smart Watch Straps',
    discount: 'Min. 40% Off',
    imageUrl: 'https://cdn.shopify.com/s/files/1/2303/2711/files/2_e822dae0-14df-4cb8-b145-ea4dc0966b34.jpg?v=1617059123',
  },
  {
    title: 'Mixer Juicer Grinder',
    discount: 'Min. 50% Off',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIpDUjGPsRbpeKQFw7TFjrWJkaRxY68b2zA&s',
  },
];




const Gadgets = ({advertisements, status}) => {
  // const dispatch = useDispatch();
  // const { advertisements, status : adsstatus } = useSelector((state) => state.advertisements);

  // useEffect(() => {
  //   dispatch(fetchAdvertisements());
  // }, [dispatch]);
  // if (adsstatus === 'succeeded'){
  //   console.log("PUBLISHED ADVERTISEMENTS: ", advertisements);
  // }


  return (
    <div className="p-8  bg-white rounded-md">
      <h2 className="text-2xl font-bold text-center mb-6">Best Gadgets & Appliances</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
          {advertisements.filter(advertisement => advertisement.section === "Section 1").slice(0,4).map((advertisement, index) => (
            <div key={index} className="bg-white border rounded-lg shadow-lg overflow-hidden ">
              <img src={advertisement.imageUrl} alt={advertisement.title} className="w-full h-25 sm:h-48 transform hover:scale-105 transition duration-300 object-cover" />
              <div className="p-4">
                <h3 className="text-sm font-semibold sm:text-lg">{advertisement.title}</h3>
                <p className="text-green-600 text-xs sm:text-sm">{advertisement.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Gadgets;
