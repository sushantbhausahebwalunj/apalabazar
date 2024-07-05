import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct, updateProduct } from "../../../Redux/Product/productSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateProductModal from "./UpdateProductModal"; // Import the modal component
import { Link } from "react-router-dom";

const ProductTable = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.products);
  const { products, status } = productsState || {};

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId)).then((response) => {
      if (response.error) {
        toast.error("Failed to delete product");
      } else {
        toast.success("Product deleted successfully");
      }
    });
  };

  const handleUpdate = (product) => {
    setSelectedProduct(product);
    setShowUpdateModal(true);
  };

  const closeUpdateModal = () => {
    setShowUpdateModal(false);
    setSelectedProduct(null);
  };

  const updateProductHandler = async (updatedProductData) => {
    dispatch(updateProduct({ id: selectedProduct._id, productData: updatedProductData }))
      .then((response) => {
        if (response.error) {
          toast.error("Failed to update product");
        } else {
          toast.success("Product updated successfully");
          closeUpdateModal();
        }
      });
  };

  // Function to truncate description
  const truncateDescription = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  return (
    <div className="p-6 bg-card text-card-foreground rounded-lg max-w-9xl mx-auto">
      <ToastContainer />
      <h1 className="text-2xl font-semibold mb-4">All Grocery Products</h1>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Discounted Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Discount Percent
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products && products.length > 0 ? (
              products.map((product) => (
                <tr key={product._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="h-16 w-16 object-cover"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link to={`/product/${product._id}`} className="hover:text-blue-500 text-black ">
                      {product.title}
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-xs whitespace-wrap">
                    {truncateDescription(product.description, 15)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {product.category.name} {/* Added category column */}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    ₹{product.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    ₹{product.discountedPrice}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {product.discountPercent}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {product.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-4">
                    <button
                      className="text-indigo-600 hover:text-indigo-900"
                      onClick={() => handleUpdate(product)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="px-6 py-4 text-center">
                  No products available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
      {showUpdateModal && selectedProduct && (
        <UpdateProductModal
          product={selectedProduct}
          onClose={closeUpdateModal}
          onUpdate={updateProductHandler}
        />
      )}
    </div>
  );
};

export default ProductTable;
