// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// // import { createAdvertisement, fetchAdvertisements } from '../../../Redux/Advertisement/advertisementSlice';
// import { fetchProducts } from '../../../Redux/Product/productSlice';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// // import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const CreateAdvertisement = () => {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.products.products);
// //   const advertisements = useSelector((state) => state.advertisements.advertisements);

//   const [form, setForm] = useState({
//     title: '',
//     description: '',
//     imageUrl: '',
//     product: '',
//     startDate: new Date(),
//     endDate: new Date(),
//   });
//   const [imagePreview, setImagePreview] = useState(null);

//   useEffect(() => {
//     dispatch(fetchProducts());
//     dispatch(fetchAdvertisements());
//   }, [dispatch]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prevForm) => ({ ...prevForm, [name]: value }));
//   };

//   const handleDateChange = (date, name) => {
//     setForm((prevForm) => ({ ...prevForm, [name]: date }));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setForm((prevForm) => ({ ...prevForm, imageUrl: URL.createObjectURL(file) }));
//     setImagePreview(URL.createObjectURL(file));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     for (const key in form) {
//       formData.append(key, form[key]);
//     }
//     dispatch(createAdvertisement(formData)).then((response) => {
//       if (response.error) {
//         toast.error('Failed to create advertisement');
//       } else {
//         toast.success('Advertisement created successfully');
//         dispatch(fetchAdvertisements());
//       }
//     });
//   };

//   const renderSection = (sectionName, sectionAds) => (
//     <div className="p-6 bg-card text-card-foreground rounded-lg max-w-9xl mx-auto mb-6">
//       <h2 className="text-2xl font-semibold mb-4">{sectionName}</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {sectionAds.map((ad) => (
//           <div key={ad._id} className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold mb-2">{ad.title}</h3>
//             <p>{ad.description}</p>
//             <img src={ad.imageUrl} alt="Ad" className="h-32 w-32 object-cover rounded-md shadow-md mt-2" />
//             <p>Product: {ad.product.title}</p>
//             <p>Start Date: {new Date(ad.startDate).toLocaleDateString()}</p>
//             <p>End Date: {new Date(ad.endDate).toLocaleDateString()}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="p-6 bg-card text-card-foreground rounded-lg max-w-9xl mx-auto">
//       <ToastContainer />
//       <h1 className="text-2xl font-semibold mb-4">Create Advertisement</h1>
//       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <div className="mb-6">
//             <label htmlFor="title" className="block text-sm font-medium text-zinc-700 mb-3">Advertisement Title <span className="text-destructive">*</span></label>
//             <input type="text" id="title" name="title" value={form.title} onChange={handleChange} className="mt-1 block w-full p-2 border border-input rounded-md" placeholder="Enter ad title" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="description" className="block text-sm font-medium text-zinc-700 mb-3">Description</label>
//             <textarea id="description" name="description" value={form.description} onChange={handleChange} className="mt-1 block w-full p-2 border border-input rounded-md" placeholder="Enter description" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="product" className="block text-sm font-medium text-zinc-700 mb-3">Product <span className="text-destructive">*</span></label>
//             <select id="product" name="product" value={form.product} onChange={handleChange} className="mt-1 block w-full p-2 border border-input rounded-md">
//               <option value="">Choose product</option>
//               {products.map((product) => (
//                 <option key={product._id} value={product._id}>{product.title}</option>
//               ))}
//             </select>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="startDate" className="block text-sm font-medium text-zinc-700 mb-3">Start Date <span className="text-destructive">*</span></label>
//             <DatePicker selected={form.startDate} onChange={(date) => handleDateChange(date, 'startDate')} className="mt-1 block w-full p-2 border border-input rounded-md" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="endDate" className="block text-sm font-medium text-zinc-700 mb-3">End Date <span className="text-destructive">*</span></label>
//             <DatePicker selected={form.endDate} onChange={(date) => handleDateChange(date, 'endDate')} className="mt-1 block w-full p-2 border border-input rounded-md" />
//           </div>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-lg font-semibold mb-4">Upload Image</h2>
//           <input type="file" name="image" onChange={handleFileChange} className="block w-full mb-4" />
//           {imagePreview && (
//             <div className="mt-4">
//               <h3 className="text-md font-medium mb-2">Image Preview:</h3>
//               <img src={imagePreview} alt="Preview" className="h-32 w-32 object-cover rounded-md shadow-md" />
//             </div>
//           )}
//           <div className="flex justify-end space-x-4 mt-12">
//             <button type="submit" className="px-4 py-2 rounded-md bg-green-500 text-primary-foreground hover:bg-green-600">Add Advertisement</button>
//           </div>
//         </div>
//       </form>
//       <h1 className="text-2xl font-semibold mb-4">Advertisement Sections</h1>
//       {renderSection('Top Banner', advertisements.filter(ad => ad.section === 'top-banner'))}
//       {renderSection('Sidebar', advertisements.filter(ad => ad.section === 'sidebar'))}
//       {renderSection('Main Area', advertisements.filter(ad => ad.section === 'main-area'))}
//       {renderSection('Footer', advertisements.filter(ad => ad.section === 'footer'))}
//     </div>
//   );
// };

// export default CreateAdvertisement;

// import React, { useState, useEffect } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const CreateAdvertisement = () => {
//   const [form, setForm] = useState({
//     title: '',
//     description: '',
//     imageUrl: '',
//     product: '',
//     startDate: new Date(),
//     endDate: new Date(),
//   });
//   const [imagePreview, setImagePreview] = useState(null);
//   const [products, setProducts] = useState([]);
//   const [advertisements, setAdvertisements] = useState([]);

//   useEffect(() => {
//     fetchProducts();
//     fetchAdvertisements();
//   }, []);

//   const fetchProducts = () => {
//     // Simulated fetchProducts function
//     // Replace with actual API call to fetch products
//     const dummyProducts = [
//       { _id: '1', title: 'Product 1' },
//       { _id: '2', title: 'Product 2' },
//       { _id: '3', title: 'Product 3' },
//     ];
//     setProducts(dummyProducts);
//   };

//   const fetchAdvertisements = () => {
//     // Simulated fetchAdvertisements function
//     // Replace with actual API call to fetch advertisements
//     const dummyAdvertisements = [
//       { _id: '1', title: 'Ad 1', description: 'Description 1', imageUrl: 'https://dummyimage.com/300x200', product: { _id: '1', title: 'Product 1' }, startDate: new Date(), endDate: new Date() },
//       { _id: '2', title: 'Ad 2', description: 'Description 2', imageUrl: 'https://dummyimage.com/300x200', product: { _id: '2', title: 'Product 2' }, startDate: new Date(), endDate: new Date() },
//       { _id: '3', title: 'Ad 3', description: 'Description 3', imageUrl: 'https://dummyimage.com/300x200', product: { _id: '3', title: 'Product 3' }, startDate: new Date(), endDate: new Date() },
//     ];
//     setAdvertisements(dummyAdvertisements);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prevForm) => ({ ...prevForm, [name]: value }));
//   };

//   const handleDateChange = (date, name) => {
//     setForm((prevForm) => ({ ...prevForm, [name]: date }));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setForm((prevForm) => ({ ...prevForm, imageUrl: URL.createObjectURL(file) }));
//     setImagePreview(URL.createObjectURL(file));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulated form data submission
//     const newAdvertisement = {
//       ...form,
//       product: products.find((p) => p._id === form.product),
//     };
//     // Simulated success toast
//     toast.success('Advertisement created successfully');
//     setAdvertisements([...advertisements, newAdvertisement]);
//     // Reset form after submission
//     setForm({
//       title: '',
//       description: '',
//       imageUrl: '',
//       product: '',
//       startDate: new Date(),
//       endDate: new Date(),
//     });
//     // Reset image preview
//     setImagePreview(null);
//   };

//   const renderSection = (sectionName, sectionAds) => (
//     <div className="p-6 bg-card text-card-foreground rounded-lg max-w-9xl mx-auto mb-6">
//       <h2 className="text-2xl font-semibold mb-4">{sectionName}</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {sectionAds.map((ad) => (
//           <div key={ad._id} className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold mb-2">{ad.title}</h3>
//             <p>{ad.description}</p>
//             <img src={ad.imageUrl} alt="Ad" className="h-32 w-32 object-cover rounded-md shadow-md mt-2" />
//             <p>Product: {ad.product.title}</p>
//             <p>Start Date: {new Date(ad.startDate).toLocaleDateString()}</p>
//             <p>End Date: {new Date(ad.endDate).toLocaleDateString()}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="p-6 bg-card text-card-foreground rounded-lg max-w-9xl mx-auto">
//       <ToastContainer />
//       <h1 className="text-2xl font-semibold mb-4">Create Advertisement</h1>
//       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <div className="mb-6">
//             <label htmlFor="title" className="block text-sm font-medium text-zinc-700 mb-3">Advertisement Title <span className="text-destructive">*</span></label>
//             <input type="text" id="title" name="title" value={form.title} onChange={handleChange} className="mt-1 block w-full p-2 border border-input rounded-md" placeholder="Enter ad title" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="description" className="block text-sm font-medium text-zinc-700 mb-3">Description</label>
//             <textarea id="description" name="description" value={form.description} onChange={handleChange} className="mt-1 block w-full p-2 border border-input rounded-md" placeholder="Enter description" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="product" className="block text-sm font-medium text-zinc-700 mb-3">Product <span className="text-destructive">*</span></label>
//             <select id="product" name="product" value={form.product} onChange={handleChange} className="mt-1 block w-full p-2 border border-input rounded-md">
//               <option value="">Choose product</option>
//               {products.map((product) => (
//                 <option key={product._id} value={product._id}>{product.title}</option>
//               ))}
//             </select>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="startDate" className="block text-sm font-medium text-zinc-700 mb-3">Start Date <span className="text-destructive">*</span></label>
//             <DatePicker selected={form.startDate} onChange={(date) => handleDateChange(date, 'startDate')} className="mt-1 block w-full p-2 border border-input rounded-md" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="endDate" className="block text-sm font-medium text-zinc-700 mb-3">End Date <span className="text-destructive">*</span></label>
//             <DatePicker selected={form.endDate} onChange={(date) => handleDateChange(date, 'endDate')} className="mt-1 block w-full p-2 border border-input rounded-md" />
//           </div>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-lg font-semibold mb-4">Upload Image</h2>
//           <input type="file" name="image" onChange={handleFileChange} className="block w-full mb-4" />
//           {imagePreview && (
//             <div className="mt-4">
//               <h3 className="text-md font-medium mb-2">Image Preview:</h3>
//               <img src={imagePreview} alt="Preview" className="h-32 w-32 object-cover rounded-md shadow-md" />
//             </div>
//           )}
//           <div className="flex justify-end space-x-4 mt-12">
//             <button type="submit" className="px-4 py-2 rounded-md bg-green-500 text-primary-foreground hover:bg-green-600">Add Advertisement</button>
//           </div>
//         </div>
//       </form>
//       <h1 className="text-2xl font-semibold mb-4">Advertisement Sections</h1>
//       {renderSection('Top Banner', advertisements.filter(ad => ad.section === 'top-banner'))}
//       {renderSection('Sidebar', advertisements.filter(ad => ad.section === 'sidebar'))}
//       {renderSection('Main Area', advertisements.filter(ad => ad.section === 'main-area'))}
//       {renderSection('Footer', advertisements.filter(ad => ad.section === 'footer'))}
//     </div>
//   );
// };

// export default CreateAdvertisement;

import React from 'react';
import { useState } from 'react';

const cardClasses = ' p-4 rounded-lg shadow-lg flex-1 lg:w-[300px] h-[100px]  hover:scale-[1.02] bg-gradient-to-b from-cyan-400 to-blue-400 transition duration-300';
const iconClasses = 'rounded-full p-2';
const textClasses = 'text-2xl font-bold text-card-foreground';
const valueClasses = 'text-2xl font-bold text-card-foreground';
const changeClasses = 'flex items-center space-x-1';
const buttonClasses = 'relative px-4 py-2 bg-gray-100 text-black rounded-md hover:bg-gray-300 hover:text-white transition duration-300';

const CardComponent = ({ isActive, onClick, title, value, change='566', content, iconBgColor }) => {
    return (
      <div className={cardClasses} onClick={onClick}>
        <div className="flex items-center space-x-2 mb-2 ">
          <div className={textClasses}>{title}</div>
        </div>
        <div className={valueClasses}>{value}</div>
        
        <div className="mt-2">
            {content}
          
        </div>

      </div>
    );
  };


const CreateAdvertisement = () => {

//   return (
//     <div className="grid grid-cols-1 mx-auto lg:grid-cols-2 gap-10 mt-16 w-fit justify-self-center justify-items-center">
//       <CardComponent title="Section 1" content="Stats for Ads" iconBgColor='bg-gray-300' />
//       <CardComponent title="Section 2" content="Stats for Ads" iconBgColor='bg-gray-300' />
//       <CardComponent title="Section 3" content="Stats for Ads" iconBgColor='bg-gray-300' />
//       <CardComponent title="Section 4" content="Stats for Ads" iconBgColor='bg-gray-300' />
//     </div>
//   );
    const sectionContent = {
        'Section 1': <div>Main content for Section 1</div>,
        'Section 2': <div>Main content for Section 2</div>,
        'Section 3': <div>Main content for Section 3</div>,
        'Section 4': <div>Main content for Section 4</div>,
    };

    const sectionAds = {
        'Section 1': [
        { id: 1, title: 'Ad 1', content: 'Description of Ad 1' },
        { id: 2, title: 'Ad 2', content: 'Description of Ad 2' },
        { id: 3, title: 'Ad 3', content: 'Description of Ad 3' },
        { id: 4, title: 'Ad 4', content: 'Description of Ad 4' },
        ],
        'Section 2': [
        { id: 3, title: 'Ad 3', content: 'Description of Ad 3' },
        { id: 4, title: 'Ad 4', content: 'Description of Ad 4' },
        { id: 5, title: 'Ad 5', content: 'Description of Ad 5' },
        { id: 6, title: 'Ad 6', content: 'Description of Ad 6' },
        ],
        'Section 3': [
        { id: 7, title: 'Ad 7', content: 'Description of Ad 7' },
        { id: 8, title: 'Ad 8', content: 'Description of Ad 8' },
        ],
        'Section 4': [
        { id: 9, title: 'Ad 9', content: 'Description of Ad 9' },
        { id: 10, title: 'Ad 10', content: 'Description of Ad 10' },
        ],
    };

    const [activeTab, setActiveTab] = useState('Section 1'); 
    const [ads, setAds] = useState(sectionAds['Section 1']);

    const handleTabClick = (title) => {
        setActiveTab(title);
        setAds(sectionAds[title]);
    };

    
    return (
        <div className="mx-auto mt-16 w-fit justify-self-center justify-items-center">
        {/* Navigation tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            <CardComponent
            title="Section 1"
            content="Stats for Ads"
            isActive={activeTab === 'Section 1'}
            onClick={() => handleTabClick('Section 1')}
            />
            <CardComponent
            title="Section 2"
            content="Stats for Ads"
            isActive={activeTab === 'Section 2'}
            onClick={() => handleTabClick('Section 2')}
            />
            <CardComponent
            title="Section 3"
            content="Stats for Ads"
            isActive={activeTab === 'Section 3'}
            onClick={() => handleTabClick('Section 3')}
            />
            <CardComponent
            title="Section 4"
            content="Stats for Ads"
            isActive={activeTab === 'Section 4'}
            onClick={() => handleTabClick('Section 4')}
            />
        </div>

        {/* Main content area */}
        <div className="mt-8 grid grid-cols-2 gap-10">
            {/* Column 1: List of available ads */}
            <div>
            <h2 className="text-lg font-semibold mb-4">Available Ads</h2>
            {ads.length > 0 ? (
                <ul className="divide-y divide-gray-200">
                {ads.map((ad) => (
                    <li key={ad.id} className="py-4">
                    <div className="flex items-center justify-between">
                        <div>
                        <h3 className="text-lg font-medium text-gray-800">{ad.title}</h3>
                        <p className="mt-2 text-sm text-gray-600">{ad.content}</p>
                        </div>
                        <button className="px-3 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600">Edit</button>
                    </div>
                    </li>
                ))}
                </ul>
            ) : (
                <p>No ads available for this section.</p>
            )}
            </div>
            {/* Column 2: Placeholder */}
            <div>
            {/* Placeholder for other content or functionality */}
            <h2 className="text-lg font-semibold mb-4">Other Content or Functionality</h2>
            <p>Placeholder for additional content or functionality related to ads.</p>
            </div>
        </div>
        </div>
    );
};

export default CreateAdvertisement;
