import React from 'react';

const ProductCard = ({ imageUrl, title, description, link }) => {
  return (
<div className='p-3 bg-gray-200 mx-1 rounded-xl space-y-1'>
<a href={link}>
    <div className="flex items-center  justify-end bg-opacity-50  w-full"  >

      <img src={imageUrl} className=' rounded-md object-fill h-[30vh] w-full ' alt='img'></img>
    
    </div>
</a>
</div>

  );
};

const ProductList = () => {
  return (
    <div className="m-6 space-y-2 rounded-xl">

      <ProductCard
        imageUrl="https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fboolfly%2Fbanner%2Fnew_korean_Style_banner_desktop_4500-x-1125.jpg%3Fwidth%3D1024&w=1920&q=75"
        // title="Just Pop It In!"
        // description="Delicious Flavours | Easy To Make"
        link="/product-detail-page-2"
      />
      <ProductCard
        imageUrl="snacks.jpg"
        // title="Time For A Chai Break!"
        // description="Bakery products that go well with your tea."
        link="/product-detail-page-3"
      />
    </div>
  );
};

const ProductComponent = () => {
  return <ProductList />;
};

export default ProductComponent;
