import React from 'react';

const HomePageAdvertisement = () => {
  const advertisements = [
    { id: 1, imageUrl: 'https://image.useinsider.com/itcindia/defaultImageLibrary/Frozen%201080-x-1080_desktop%20v2-1717427674.jpeg' },
    { id: 2, imageUrl: 'https://image.useinsider.com/itcindia/defaultImageLibrary/Bingo%201080-x-1080_T20_desktop%20v2-1717427681.jpeg' },
    { id: 3, imageUrl: 'https://image.useinsider.com/itcindia/defaultImageLibrary/B%20Natural%201080-x-1080_desktop%20v2-1717427692.jpeg' },
    { id: 4, imageUrl: 'https://image.useinsider.com/itcindia/defaultImageLibrary/B%20Natural%201080-x-1080_desktop%20v2-1717427692.jpeg' },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-screen-lg px-4">
        {advertisements.map(ad => (
          <div key={ad.id} className="advertisement-card p-2 h-96">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex justify-center items-center">
              <img src={ad.imageUrl} alt={`Advertisement ${ad.id}`} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageAdvertisement;
