import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, fetchProducts } from '../../../Redux/Product/productSlice';
import { fetchCategories } from '../../../Redux/Category/categoriesSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles

import * as XLSX from 'xlsx';

// export const importExcelData = (file, callback) => {
//   const reader = new FileReader();
//   reader.onload = (event) => {
//     const data = new Uint8Array(event.target.result);
//     const workbook = XLSX.read(data, { type: 'array' });
//     const sheetName = workbook.SheetNames[0];
//     const worksheet = workbook.Sheets[sheetName];
//     const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

//     // Convert the array of arrays into an array of objects
//     const headers = jsonData[0];
//     const rows = jsonData.slice(1);
//     const formattedData = rows.map((row) => {
//       const obj = {};
//       row.forEach((cell, index) => {
//         obj[headers[index]] = cell;
//       });
//       return obj;
//     });

//     callback(formattedData);
//   };
//   reader.readAsArrayBuffer(file);
// };


const CreateProductForm = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    discountedPrice: '',
    discountPercent: '',
    quantity: '',
    category: '',
    brand: '',
    image: null,
    slug: '',
    BarCode: '',
    stockType:'',
    unit:'',
    purchaseRate: '',
    profitPercentage: '',
    HSN:'',
    GST:'',
    retailPrice:'',
    totalAmount:'',
    amountPaid:'',

  });
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setForm((prevForm) => ({ ...prevForm, image: file }));
    setImagePreview(URL.createObjectURL(file));
  };

  const handleDescriptionChange = (value) => {
    setForm((prevForm) => ({ ...prevForm, description: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }
    dispatch(createProduct(formData)).then((response) => {
      if (response.error) {
        toast.error('Failed to create product');
      } else {
        toast.success('Product created successfully');
        dispatch(fetchProducts());
        // Navigate to products page after a short delay to show toast
        setTimeout(() => {
          window.location.href = '/admin/products';
        }, 2000);
      }
    });
  };

  return (
    <div className="p-6 bg-card text-card-foreground rounded-lg max-w-9xl mx-auto">
      <ToastContainer />
      <h1 className="text-2xl font-semibold mb-4">Create Grocery Product</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-6">
            <label htmlFor="title" className="block text-sm font-medium text-zinc-700 mb-3">Product Name <span className="text-destructive">*</span></label>
            <input type="text" id="title" name="title" value={form.title} onChange={handleChange} className="mt-1 block w-full p-2 border border-input rounded-md" placeholder="Enter product name" required/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-zinc-700 mb-3">Category <span className="text-destructive">*</span></label>
              <select id="category" name="category" value={form.category} onChange={handleChange} className="mt-1 block w-full p-2 border border-input rounded-md" required>
                <option value="">Choose category</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>{category.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="brand" className="block text-sm font-medium text-zinc-700 mb-3">Brand <span className="text-destructive">*</span></label>
              <input type="text" id="brand" name="brand" value={form.brand} onChange={handleChange} className="mt-1 block w-full p-2 border border-input rounded-md" placeholder="Enter brand" required/>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-zinc-700 mb-3" required >Description <span className="text-destructive">*</span></label>
            <ReactQuill
              value={form.description}
              onChange={handleDescriptionChange}
              className="mt-1 block w-full border border-input rounded-md"
              theme="snow"
              placeholder="Description"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-zinc-700 mb-3">Price <span className="text-destructive">*</span></label>
            <input type="number" id="price" name="price" value={form.price} onChange={handleChange} className="mt-1 block w-full p-2 border border-input rounded-md" placeholder="Enter price" required/>
          </div>
          <div className="mb-4">
            <label htmlFor="discountedPrice" className="block text-sm font-medium text-zinc-700 mb-3">Discounted Price</label>
            <input type="number" id="discountedPrice" name="discountedPrice" value={form.discountedPrice} onChange={handleChange} className="mt-1 block w-full p-2 border border-input rounded-md" placeholder="Enter discounted price" />
          </div>
          <div className="mb-4">
            <label htmlFor="discountPercent" className="block text-sm font-medium text-zinc-700 mb-3">Discount Percent</label>
            <input type="number" id="discountPercent" name="discountPercent" value={form.discountPercent} onChange={handleChange} className="mt-1 block w-full p-2 border border-input rounded-md" placeholder="Enter discount percent" />
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block text-sm font-medium text-zinc-700 mb-3">Quantity</label>
            <input type="number" id="quantity" name="quantity" value={form.quantity} onChange={handleChange} className="mt-1 block w-full p-2 border border-input rounded-md" placeholder="Enter quantity" />
          </div>
          <div className="mb-4">
            <label htmlFor="BarCode" className="block text-sm font-medium text-zinc-700 mb-3">Bar Code</label>
            <input type="text" id="BarCode" name="BarCode" value={form.BarCode} onChange={handleChange} className="mt-1 block w-full p-2 border border-input rounded-md" placeholder="Enter BarCode" required/>
          </div>
          <div className="mb-4">
            <label htmlFor="stockType" className="block text-sm font-medium text-zinc-700 mb-3">Stock Type</label>
            <input type="text" id="stockType" name="stockType" value={form.stockType} onChange={handleChange} className="mt-1 block w-full p-2 border border-input rounded-md" placeholder="Enter Stock Type" required/>
          </div>
          <div className="mb-4">
            <label htmlFor="unit" className="block text-sm font-medium text-zinc-700 mb-3">Unit</label>
            <input type="text" id="unit" name="unit" value={form.unit} onChange={handleChange} className="mt-1 block w-full p-2 border border-input rounded-md" placeholder="Enter Unit" required/>
          </div>
          <div className="mb-4">
            <label htmlFor="purchaseRate" className="block text-sm font-medium text-zinc-700 mb-3">Purchase Rate</label>
            <input type="number" id="purchaseRate" name="purchaseRate" value={form.purchaseRate} onChange={handleChange} className="mt-1 block w-full p-2 border border-input rounded-md" placeholder="Enter Purchase Rate" required/>
          </div>
          <div className="mb-4">
            <label htmlFor="profitPercentage" className="block text-sm font-medium text-zinc-700 mb-3">Profit Percentage</label>
            <input type="number" id="profitPercentage" name="profitPercentage" value={form.profitPercentage} onChange={handleChange} className="mt-1 block w-full p-2 border border-input rounded-md" placeholder="Enter Profit Percentage" required/>
          </div>
          <div className="mb-4">
            <label htmlFor="HSN" className="block text-sm font-medium text-zinc-700 mb-3">HSN</label>
            <input type="number" id="HSN" name="HSN" value={form.HSN} onChange={handleChange} className="mt-1 block w-full p-2 border border-input rounded-md" placeholder="Enter HSN" required/>
          </div>
          <div className="mb-4">
            <label htmlFor="GST" className="block text-sm font-medium text-zinc-700 mb-3">GST</label>
            <input type="number" id="GST" name="GST" value={form.GST} onChange={handleChange} className="mt-1 block w-full p-2 border border-input rounded-md" placeholder="Enter GST" required/>
          </div>
          <div className="mb-4">
            <label htmlFor="retailPrice" className="block text-sm font-medium text-zinc-700 mb-3">Retail Price</label>
            <input type="number" id="retailPrice" name="retailPrice" value={form.retailPrice} onChange={handleChange} className="mt-1 block w-full p-2 border border-input rounded-md" placeholder="Enter Retail Price" required/>
          </div>
          <div className="mb-4">
            <label htmlFor="totalAmount" className="block text-sm font-medium text-zinc-700 mb-3">Total Amount</label>
            <input type="number" id="totalAmount" name="totalAmount" value={form.totalAmount} onChange={handleChange} className="mt-1 block w-full p-2 border border-input rounded-md" placeholder="Enter Total Amount" required/>
          </div>
          <div className="mb-4">
            <label htmlFor="amountPaid" className="block text-sm font-medium text-zinc-700 mb-3">Amount Paid</label>
            <input type="number" id="amountPaid" name="amountPaid" value={form.amountPaid} onChange={handleChange} className="mt-1 block w-full p-2 border border-input rounded-md" placeholder="Enter Amount Paid" required/>
          </div>
          <div className="mb-4">
            <label htmlFor="slug" className="block text-sm font-medium text-zinc-700 mb-3">Slug <span className="text-destructive">*</span></label>
            <input type="text" id="slug" name="slug" value={form.slug} onChange={handleChange} className="mt-1 block w-full p-2 border border-input rounded-md" placeholder="Enter unique slug" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Upload Images</h2>
          <input type="file" name="image" onChange={handleFileChange} className="block w-full mb-4" />
          {imagePreview && (
            <div className="mt-4">
              <h3 className="text-md font-medium mb-2">Image Preview:</h3>
              <img src={imagePreview} alt="Preview" className="h-32 w-32 object-cover rounded-md shadow-md" />
            </div>
          )}
          <div className="flex justify-end space-x-4 mt-12">
            <button type="submit" className="px-4 py-2 rounded-md bg-green-500 text-primary-foreground hover:bg-green-600">Add Product</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProductForm;
