import React from 'react';
import './Popularbrand.css';

const brands = [
  { name: 'Ashirvad', logo: 'https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Famasty%2Fshopby%2Foption_images%2Fslider%2F300x300_aashirvaad.png%3Fwidth%3D230&w=1200&q=75' },
  { name: 'Brand 2', logo: 'https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Famasty%2Fshopby%2Foption_images%2Fslider%2FB-Natural.png%3Fwidth%3D230&w=1920&q=75'},
  { name: 'Brand 4', logo: 'https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Famasty%2Fshopby%2Foption_images%2Fslider%2FBingo-Logo_1.png%3Fwidth%3D230&w=1920&q=75' },
  { name: 'Brand 5', logo: 'https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Famasty%2Fshopby%2Foption_images%2Fslider%2FCandyman_1.png%3Fwidth%3D230&w=1920&q=75' },
  { name: 'Brand 6', logo: 'https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Famasty%2Fshopby%2Foption_images%2Fslider%2FGroup_844.png%3Fwidth%3D230&w=1920&q=75' },
  { name: 'Brand 7', logo: 'https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Famasty%2Fshopby%2Foption_images%2Fslider%2FImage_2_EDW-Essenza-Logo_200x90.png%3Fwidth%3D230&w=1920&q=75' },
  { name: 'Brand 8', logo: 'https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Famasty%2Fshopby%2Foption_images%2Fslider%2FImage_2_Fabelle-Logo-04_200x90.png%3Fwidth%3D230&w=1920&q=75' },
  { name: 'Brand 9', logo: 'https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Famasty%2Fshopby%2Foption_images%2Fslider%2Fsunbean_logo_new.png%3Fwidth%3D230&w=1920&q=75' },
  { name: 'Ashirvad', logo: 'https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Famasty%2Fshopby%2Foption_images%2Fslider%2F300x300_aashirvaad.png%3Fwidth%3D230&w=1200&q=75' },
  { name: 'Brand 2', logo: 'https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Famasty%2Fshopby%2Foption_images%2Fslider%2FB-Natural.png%3Fwidth%3D230&w=1920&q=75' },
  { name: 'Brand 3', logo: 'https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Famasty%2Fshopby%2Foption_images%2Fslider%2FBingo-Logo_1.png%3Fwidth%3D230&w=1920&q=75' },
  { name: 'Brand 5', logo: 'https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Famasty%2Fshopby%2Foption_images%2Fslider%2FCandyman_1.png%3Fwidth%3D230&w=1920&q=75' },
  { name: 'Brand 6', logo: 'https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Famasty%2Fshopby%2Foption_images%2Fslider%2FGroup_844.png%3Fwidth%3D230&w=1920&q=75' },
  { name: 'Brand 7', logo: 'https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Famasty%2Fshopby%2Foption_images%2Fslider%2FImage_2_EDW-Essenza-Logo_200x90.png%3Fwidth%3D230&w=1920&q=75' },
  { name: 'Brand 8', logo: 'https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Famasty%2Fshopby%2Foption_images%2Fslider%2FImage_2_Fabelle-Logo-04_200x90.png%3Fwidth%3D230&w=1920&q=75' },
  { name: 'Brand 9', logo: 'https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Famasty%2Fshopby%2Foption_images%2Fslider%2Fsunbean_logo_new.png%3Fwidth%3D230&w=1920&q=75' },
  { name: 'Brand 5', logo: 'https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Famasty%2Fshopby%2Foption_images%2Fslider%2FCandyman_1.png%3Fwidth%3D230&w=1920&q=75' },
  { name: 'Brand 6', logo: 'https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Famasty%2Fshopby%2Foption_images%2Fslider%2FGroup_844.png%3Fwidth%3D230&w=1920&q=75' },

];

const PopularBrand = () => {
  return (
    <div className="popular-brand-container w-[96vw] m-auto rounded-xl overflow-hidden relative mt-3 mb-8 bg-gray-200 ">
         <h2 className="text-lg font-semibold mx-5 mt-4">Our most loved brands</h2>
      <div className="brand-scroll flex items-center animate-scroll mb-8">
        {brands.map((brand, index) => (
          <div key={index} className="brand-item flex-shrink-0 m-8 ">
            <img src={brand.logo} alt={brand.name} className="w-28 h-28 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularBrand;
