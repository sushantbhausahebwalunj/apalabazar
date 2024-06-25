// ProductComponent.js

import React from 'react';

const ProductCard = ({ imageUrl, link }) => {
  return (
    <div className='p-4 mx-1 rounded-md'>
      <a href={link}>
        <div className="flex items-center justify-end bg-opacity-50 rounded w-full">
          <img
            src={imageUrl}
            className='object-cover  w-full rounded-md'
            alt='Product Image'
          />
        </div>
      </a>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="m-6 bg-gray-100 rounded-md">
      <ProductCard
        imageUrl="https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fboolfly%2Fbanner%2Fnew_korean_Style_banner_desktop_4500-x-1125.jpg%3Fwidth%3D1024&w=1920&q=75"
        link="/product-detail-page-1"
      />
      <ProductCard
        imageUrl="https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fboolfly%2Fbanner%2Fnew_korean_Style_banner_desktop_4500-x-1125.jpg%3Fwidth%3D1024&w=1920&q=75"
        link="/product-detail-page-2"
      />
      {/* Add more ProductCard components as needed */}
    </div>
  );
};

const ProductComponent = () => {
  return <ProductList />;
};

export default ProductComponent;
