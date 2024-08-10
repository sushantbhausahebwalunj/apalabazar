

// const smartphones = [
//   { name: 'Galaxy S22 Ultra', price: '₹32999', originalPrice: '₹74999', image: 'dummy-image-1.jpg' },
//   { name: 'Galaxy M13 (4GB | 64 GB)', price: '₹10499', originalPrice: '₹14999', image: 'dummy-image-2.jpg' },
//   { name: 'Galaxy M33 (4GB | 64 GB)', price: '₹16999', originalPrice: '₹24999', image: 'dummy-image-3.jpg' },
//   { name: 'Galaxy M53 (4GB | 64 GB)', price: '₹31999', originalPrice: '₹40999', image: 'dummy-image-4.jpg' },
//   { name: 'Galaxy S22 Ultra', price: '₹67999', originalPrice: '₹85999', image: 'dummy-image-5.jpg' },
//   { name: 'Galaxy S22 Ultra', price: '₹32999', originalPrice: '₹74999', image: 'dummy-image-1.jpg' },
//   { name: 'Galaxy M13 (4GB | 64 GB)', price: '₹10499', originalPrice: '₹14999', image: 'dummy-image-2.jpg' },
//   { name: 'Galaxy M33 (4GB | 64 GB)', price: '₹16999', originalPrice: '₹24999', image: 'dummy-image-3.jpg' },
//   { name: 'Galaxy M53 (4GB | 64 GB)', price: '₹31999', originalPrice: '₹40999', image: 'dummy-image-4.jpg' },
//   { name: 'Galaxy S22 Ultra', price: '₹67999', originalPrice: '₹85999', image: 'dummy-image-5.jpg' },
//   { name: 'Galaxy S22 Ultra', price: '₹67999', originalPrice: '₹85999', image: 'dummy-image-5.jpg' },
//   { name: 'Galaxy S22 Ultra', price: '₹32999', originalPrice: '₹74999', image: 'dummy-image-1.jpg' },
//   { name: 'Galaxy M13 (4GB | 64 GB)', price: '₹10499', originalPrice: '₹14999', image: 'dummy-image-2.jpg' },
//   { name: 'Galaxy M33 (4GB | 64 GB)', price: '₹16999', originalPrice: '₹24999', image: 'dummy-image-3.jpg' },
//   { name: 'Galaxy M53 (4GB | 64 GB)', price: '₹31999', originalPrice: '₹40999', image: 'dummy-image-4.jpg' },
// ];

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuggestedProducts } from "../../../../Redux/Product/productSlice";
import { addToCart } from '../../../../Redux/Cart/cartSlice';
import { useParams, useNavigate } from "react-router-dom";
import {  Link } from 'react-router-dom';

const ProductCards = ({ categoryId, excludeProductId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();


  const { suggestedProducts, status, error } = useSelector((state) => state.products);
  const [showAll, setShowAll] = useState(false);
  const handleAddToCart = async () => {
    const resultAction = await dispatch(addToCart(id));
    if (addToCart.rejected.match(resultAction) && resultAction.payload && resultAction.payload.isUnauthorized) {
      navigate('/login');
    }
  };

  useEffect(() => {
    if (categoryId) {
      dispatch(fetchSuggestedProducts(categoryId));
    }
  }, [dispatch, categoryId]);

  const handleViewAllClick = () => {
    setShowAll(!showAll);
  };

  
const filteredProducts = suggestedProducts.filter(product => product._id !== excludeProductId);

const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 5);
  return (
    <div className="p-8">
      
      <div className='flex row gap-40 justify-between'>
        <h2 className="text-2xl font-bold mb-4">
          Grab the best deal on <span className="text-orange-500">Aapla Bajar</span>
        </h2>
        <button onClick={handleViewAllClick} className="text-orange-500 ml-30">
          {showAll ? 'Show Less' : 'View All'}
        </button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <hr className="border-t-2 border-orange-500 flex-grow mr-2" />
      </div>
      <div className="grid grid-cols-5 gap-4">
      {displayedProducts.map((product, index) => (
          <div
            key={product._id}
            className={`p-4 rounded-lg shadow-lg ${index === 1 ? 'border-2 border-orange-500' : ''}`}
          >
                    <Link to={`/product/${product._id}`}>

            <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover mb-4" />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            </Link>
            <div className="text-xl font-bold text-green-600">{product.discountedPrice}</div>
            <div className="text-gray-500 line-through">{product.price}</div>
            <button onClick={handleAddToCart}  className="mt-2 text-green-600">Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
