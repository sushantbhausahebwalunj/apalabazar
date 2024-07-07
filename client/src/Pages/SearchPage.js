import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/Product/productSlice";
import { useCartContext } from "../Usecontext/cartContext";
import { Link } from "react-router-dom";
import Navbar from "../customer/Components/Navbar/Navbar.js";
const productCardClasses =
  "bg-white flex-col flex rounded-lg p-1 lg:p-4 mb-3 mt-5 lg:mx-4 border h-fit border-gray-300 lg:w-60 h-fit transition-transform duration-300 hover:scale-105";
const imageClasses = "w-full object-contain mb-2 h-32";
const buttonClasses =
  "bg-blue-500 text-white lg:text-lg text-md py-2 px-2 rounded-lg lg:w-full w-30 my-3";

const ProductCard = ({ product }) => {
  const { addTocart } = useCartContext();
  return (
    <div className={productCardClasses}>
      <div className="h-1/2">
        <Link to={`/product/${product._id}`}>
          <img
            className={imageClasses}
            src={product.imageUrl}
            alt="Product Image"
          />
          <h3 className="text-xs sm:text-sm font-medium mb-1 sm:mb-2">
            {product.title}
          </h3>
        </Link>
      </div>
      <div className="h-1/2">
        <div className="flex justify-between text-xs sm:text-sm text-zinc-500 mb-1 sm:mb-2">
          <div>
            MRP <span className="line-through">{product.price}</span>{" "}
            <span className="font-semibold">{product.discountedPrice}</span>
          </div>
          <div>
            Sale{" "}
            <span className="font-semibold">{product.discountedPrice}</span>
          </div>
        </div>
        <div className="text-blue-400 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">
          {product.discountPercent}% off
        </div>
        <div className="text-xs sm:text-sm text-zinc-500 mb-1 sm:mb-2">
          {product.quantity} available
        </div>
        <div className="flex justify-center">
          <button className={buttonClasses} onClick={() => addTocart(product)}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

const SearchResults = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error fetching products</div>;
  }

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(name.toLowerCase()) ||
      product.category.name.toLowerCase().includes(name.toLowerCase()) ||
      product.brand.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="p-4">
        <h2 className="text-2xl font-semibold">Search results</h2>
        <p className="text-muted-foreground">
          Showing results for <span className="font-semibold">"{name}"</span>.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
