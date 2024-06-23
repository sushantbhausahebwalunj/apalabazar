import React, { useState } from 'react';

const CreateProductForm = () => {
  const [formValues, setFormValues] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    discountedPrice: "",
    price: "",
    discountPersent: "",
    size: "",
    quantity: "",
    topLavelCategory: "",
    secondLavelCategory: "",
    thirdLavelCategory: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic here
    console.log(formValues);
  };

  return (
    <div className="flex flex-col items-center p-6  min-h-screen">

      <form
        onSubmit={handleSubmit}
        className=" bg-green-400 p-8 rounded-lg shadow-2xl w-full max-w-4xl space-y-6"
      >

        <h1 className="text-2xl text-center font-bold text-grey mb-6" sx={{ letterSpacing: ".25px", fontWeight: "bold", fontFamily: "sans-serif", mt: 2, }}>Add New Product</h1>
        <div className="w-full">
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={formValues.imageUrl}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 hover:shadow-lg"
          />
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="w-full">
            <input
              type="text"
              name="brand"
              placeholder="Brand"
              value={formValues.brand}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 hover:shadow-lg"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formValues.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 hover:shadow-lg"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              name="color"
              placeholder="Color"
              value={formValues.color}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 hover:shadow-lg"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="w-full">
            <input
              type="number"
              name="discountedPrice"
              placeholder="Discounted Price"
              value={formValues.discountedPrice}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 hover:shadow-lg"
            />
          </div>
          <div className="w-full">
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formValues.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 hover:shadow-lg"
            />
          </div>
          <div className="w-full">
            <input
              type="number"
              name="discountPersent"
              placeholder="Discount Percent"
              value={formValues.discountPersent}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 hover:shadow-lg"
            />
          </div>
        </div>
        <div className="w-full">
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formValues.quantity}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 hover:shadow-lg"
          />
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="w-full">
            <input
              type="text"
              name="topLavelCategory"
              placeholder="Top Level Category"
              value={formValues.topLavelCategory}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 hover:shadow-lg"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              name="secondLavelCategory"
              placeholder="Second Level Category"
              value={formValues.secondLavelCategory}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 hover:shadow-lg"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              name="thirdLavelCategory"
              placeholder="Third Level Category"
              value={formValues.thirdLavelCategory}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 hover:shadow-lg"
            />
          </div>
        </div>
        <div className="w-full">
          <textarea
            name="description"
            placeholder="Description"
            value={formValues.description}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 hover:shadow-lg"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 hover:shadow-lg transition duration-200"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProductForm;
