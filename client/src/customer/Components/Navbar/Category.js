import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../Redux/Category/categoriesSlice"; // Adjust the path as necessary
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Category = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const categoryError = useSelector((state) => state.categories.error);

  useEffect(() => {
    dispatch(fetchCategories())
      .unwrap()
      .then(() => {
        toast.success("Categories loaded successfully!");
      })
      .catch((error) => {
        toast.error(`Failed to load categories: ${error.message}`);
      });
  }, [dispatch]);

  const handleNavigate = (path) => {
    navigate(path);
  };

  const renderSubcategories = (parentCategoryId) => {
    return categories
      .filter((category) => category.parentCategory && category.parentCategory._id === parentCategoryId)
      .map((subcategory) => (
        <li key={subcategory._id}>
          <button onClick={() => handleNavigate(`/${subcategory.parentCategory._id.toLowerCase()}/${subcategory._id}`)}>
            {subcategory.name}
          </button>
        </li>
      ));
  };

  const renderCategories = () => {
    return categories
      .filter((category) => category.level === 1)
      .map((category) => (
        <div key={category._id}>
          <img
            // src={`https://cdn.dmart.in/images/categories/${category.slug}-131022.svg`}
            // alt={category.name}
            // className="mb-2"
          />
          <h2 className="font-bold mb-2">{category.name}</h2>
          <ul className="space-y-1 mb-4 font-extralight">
            {renderSubcategories(category._id)}
          </ul>
        </div>
      ));
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 bg-white relative min-h-screen">
        <button
          onClick={() => handleNavigate("/")}
          className="absolute top-4 right-4 text-lg font-bold bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
        >
          &times;
        </button>
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {renderCategories()}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Category;
