import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuggestedProducts } from "../../../../Redux/Product/productSlice";

const ProductCards = ({ categoryId }) => {
  const dispatch = useDispatch();
  const { suggestedProducts, loading, error } = useSelector((state) => state.products);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (categoryId) {
      dispatch(fetchSuggestedProducts(categoryId));
    }
  }, [dispatch, categoryId]);

  const handleViewAllClick = () => {
    setShowAll(!showAll);
  };

  const displayedProducts = showAll ? suggestedProducts : suggestedProducts.slice(0, 5);

  return (
    <div className="p-8">
      <div className="flex row gap-40 justify-between">
        <h2 className="text-2xl font-bold mb-4">
          Grab the best deal on Apala Bajar
        </h2>
        <button onClick={handleViewAllClick} className="text-orange-500 ml-30">
          {showAll ? 'Show Less' : 'View All'}
        </button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <hr className="border-t-2 border-orange-500 flex-grow mr-2" />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="grid grid-cols-5 gap-4">
          {displayedProducts.map((product, index) => (
            <div
              key={product._id}
              className={`p-4 rounded-lg shadow-lg ${index === 1 ? 'border-2 border-orange-500' : ''}`}
            >
              <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover mb-4" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="text-xl font-bold text-green-600">{product.price}</div>
              <div className="text-gray-500 line-through">{product.originalPrice}</div>
              <button className="mt-2 text-green-600">Buy Now</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCards;
