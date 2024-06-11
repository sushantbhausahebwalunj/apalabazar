import React from 'react';

const cardClasses = "block rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105";
const contentClasses = "p-4 bg-white dark:bg-zinc-800";
const titleClasses = "text-lg font-medium";

const ProductCard = ({ href, imgSrc, imgAlt, title }) => {
  return (
    <a href={href} className={cardClasses}>
      <img src={imgSrc} alt={imgAlt} className="w-full h-auto" />
    </a>
  );
};

const ProductGrid = () => {
  return (
    <div className="p-4 mt-3 mx-auto mb-8 bg-gray-200 rounded-xl w-[96vw] ">
      <h2 className="text-xl font-semibold mb-4">You may like...</h2>
      <div className="grid grid-cols-1 h-[22vh] mb-10 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard href="/gifting-solution" imgSrc="https://admin.itcstore.in/media/wysiwyg/gifting-essentials.jpg" imgAlt="Gifting Solution" />
        <ProductCard href="/pooja-rituals" imgSrc="https://admin.itcstore.in/media/wysiwyg/pooja-essentials.jpg" imgAlt="Pooja and Rituals" />
        <ProductCard href="/summer-care" imgSrc="https://admin.itcstore.in/media/wysiwyg/personal-care.jpg" imgAlt="Summer Care" title="Summer Care" />
        <ProductCard href="/travel-essentials" imgSrc="https://admin.itcstore.in/media/wysiwyg/travel-essentials.jpg"/>
      </div>
    </div>
  );
};

const Maylike = () => {
  return <ProductGrid />;
};

export default Maylike;
