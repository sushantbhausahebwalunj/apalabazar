import React from 'react';

const gadgets = [
  {
    title: 'True Wireless',
    discount: 'Min. 50% Off',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgt5xhDX8T7iFuai-pzc9TBpD7YMLwoLgrQ&s',
  },
  {
    title: 'Smart Bands',
    discount: 'Min. 40% Off',
    imageUrl: 'https://fast.clickbooq.com/558626-986/Waffles-lg.gif',
  },
  {
    title: 'Smart Watch Straps',
    discount: 'Min. 40% Off',
    imageUrl: 'https://cdn2.hubspot.net/hubfs/259552/semaine2.gif',
  },
];

const Gadgets = ({advertisements, status}) => {
  return (
    <div className="rounded-md">
      <div className="flex flex-wrap m-2">
        {advertisements.filter((advertisement) => advertisement.section === "Section 3").slice(0, 2).map((advertisement, index) => (
          <div key={index} className={`w-full sm:w-${index === 0 ? '1/3 lg:w-1/3' : '2/3 lg:w-2/3'} p-4`}>
            <div className="bg-white border rounded-lg shadow-lg overflow-hidden">
              <img
                src={advertisement.imageUrl}
                alt={advertisement.title}
                className="w-full h-[600px] object-cover transform sm:hover:scale-[1.5] transition duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{advertisement.title}</h3>
                <p className="text-green-600 text-sm">{advertisement.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gadgets;
