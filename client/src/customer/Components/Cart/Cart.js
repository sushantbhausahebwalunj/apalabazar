// import { BsFillTrashFill } from "react-icons/bs";
// import React, { useEffect, useState } from 'react';
// import Navbar from '../Navbar/Navbar';
// import MobNavBar from '../Navbar/MobileNavbar';
// import { FaCircleInfo } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";

// const CartItem = ({ unik, imageSrc, productName, price, savings, qty, decreaseQuantity, increaseQuantity, removeItem }) => {
//   return (
//     <tr className="border-b ">
//       <td className="py-2 px-2 sm:py-4 sm:px-4 flex items-center">
//         <img src={imageSrc} alt="Product Image" className="w-12 h-12 sm:w-16 sm:h-16 mr-2 sm:mr-4" />
//         <div>
//           <span className="bg-green-300 text-black text-xs sm:text-xs w-20 sm:w-28 font-semibold mr-2 px-1 sm:px-2.5 py-0.5 rounded">Home Delivery Only</span>
//           <p className="text-sm sm:text-base font-medium">{productName}</p>
//           <p className="text-xs sm:text-md text-zinc-500">
//             Variant: <span className="font-semibold">320gm</span>
//           </p>
//         </div>

//       </td>
//       <td className="py-2 px-2 sm:py-4 sm:px-4 text-center">₹{price}</td>
//       <td className="py-2 px-2 sm:py-4 text-center fond-bold text-green-500">{savings}</td>
//       <td className="py-2 px-2 sm:py-4 text-center items-center">

//         <div className="flex flex-row">

//         <div className="flex flex-col sm:flex-row items-center justify-center">
//           <button className="bg-blue-500 text-white w-6 h-8 sm:w-6 sm:h-8 px-1 sm:px-2 py-1 rounded-t sm:rounded-l mb-1 sm:mb-0 " onClick={() =>decreaseQuantity(unik)}>-</button>
//           <input type="number" value={qty} readOnly min="1" className="w-12 sm:w-12 text-center border mb-1 sm:mb-0 " />
//           <button className="bg-blue-500 text-white w-6 h-8 sm:w-6 sm:h-8  sm:px-2 py-1 rounded-b sm:rounded-r mb-1 sm:mb-0 " onClick={() => increaseQuantity(unik)}>+</button>
//         </div>
//         <div className="flex items-center justify-center mt-1">
//           <button className="text-red-500 mx-3" onClick={() => removeItem(unik)}>
//             <BsFillTrashFill className="text-xl" />
//           </button>
//         </div>
//         </div>
       
//       </td>

//     </tr>
//   );
// };

// const Cart = () => {
//   const [items, setItems] = useState([]);
//   const [total, setTotal] = useState(0);
//   const navigate = useNavigate();

//   const checkOut = () => {
//     navigate('/checkout');
//   };

//   useEffect(() => {
//     async function getItems() {
//       const cartItems = await JSON.parse(localStorage.getItem('cart')) || [];
//       setItems(cartItems);
//       calculateTotal(cartItems);
//     }
//     getItems();
//   }, []);

//   const calculateTotal = (items) => {
//     const totalPrice = items.reduce((acc, item) => acc + item.price * item.qty, 0);
//     setTotal(totalPrice);
//   };

//   const increaseQuantity = (id) => {
//     const updatedItems = items.map(item => {
//       if (item.id === id) {
//         return { ...item, qty: item.qty + 1 };
//       }
//       return item;
//     });
//     setItems(updatedItems);
//     calculateTotal(updatedItems);
//   };

//   const decreaseQuantity = (id) => {
//     const updatedItems = items.map(item => {
//       if (item.id === id && item.qty > 1) {
//         return { ...item, qty: item.qty - 1 };
//       }
//       return item;
//     });
//     setItems(updatedItems);
//     calculateTotal(updatedItems);
//   };

//   const removeItem = (id) => {
//     const updatedItems = items.filter(item => item.id !== id);
//     setItems(updatedItems);
//     calculateTotal(updatedItems);
//     localStorage.setItem('cart', JSON.stringify(updatedItems));
//   };

//   const [viewport, setViewport] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setViewport(window.innerWidth < 620);
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <div className=" h-[800px]">
//       {viewport ? <MobNavBar /> : <Navbar number={12} />}
//       <div className="container mx-auto p-4">
//         <div className="flex flex-col lg:flex-row">
          
//           <div className="w-full lg:w-3/4">
//           <h3 className="text-lg  mb-4">Cart / <span className="text-green-500 font-semibold">Checkout</span> / Confirmation ({items.length} items)</h3>
          
//             <div className="overflow-x-auto rounded-md bg-white border">
//               <table className="min-w-full ">
//                 <thead className="py-5">
//                   <tr >
//                     <th className="py-2 px-2 sm:py-2 sm:px-4 border-b">Product</th>
//                     <th className="py-2 px-2 sm:py-2 sm:px-4 border-b">You Pay</th>
//                     <th className="py-2 px-2 sm:py-2 sm:px-4 border-b">You Save</th>
//                     <th className="py-2 px-2 sm:py-2 sm:px-4 border-b">No. of items</th>
//                     <th className="py-2 px-2 sm:py-2 sm:px-4 border-b"></th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {items.map(item => (
//                     <CartItem
//                       key={item.id}
//                       unik={item.id}
//                       imageSrc={typeof (item.image) === 'string' ? item.image : item.image[0]}
//                       productName={item.name}
//                       price={item.price}
//                       savings={item.discount}
//                       qty={item.qty}
//                       decreaseQuantity={decreaseQuantity}
//                       increaseQuantity={increaseQuantity}
//                       removeItem={removeItem}
//                     />
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//             <div className="mt-1 text-right">
//               <button className="text-red-500 text-sm mr-2" onClick={() => { setItems([]); setTotal(0); localStorage.removeItem('cart'); }}>Remove all</button>
//             </div>
//           </div>
//           <div className="w-full lg:w-1/4 mt-8 lg:mt-10 lg:ml-8">
//             <div className="bg-white p-4 border rounded-md">
//               <h3 className="text-lg font-semibold mb-4">Price Summary</h3>
//               <div className="flex justify-between mb-2">
//                 <span>Cart Total</span>
//                 <span>₹ {total}</span>
//               </div>
//               <div className="flex justify-between mb-2">
//                 <div className="group relative">
//                   <button>
//                     <span className="flex items-center gap-2">Delivery Charge <FaCircleInfo /></span>
//                   </button>
//                   <div className="absolute left-13 bottom-6 hidden mt-2 p-2 text-sm text-white bg-black border border-gray-300 rounded shadow-lg w-60 group-hover:block">
//                     <ul>
//                       <li>Home Delivery : Flat Rs. 29</li>
//                       <li>Pick Up Point : Free Delivery</li>
//                     </ul>
//                   </div>
//                 </div>
//                 <span className="text-red-500">+ Extra</span>
//               </div>
//               <button className="w-full bg-green-500 text-white py-2 rounded-full" onClick={checkOut}>PROCEED TO CHECKOUT</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import MobNavBar from '../Navbar/MobileNavbar';
import { BsFillTrashFill } from 'react-icons/bs';
import { FaCircleInfo } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCart, removeFromCart, clearCart, updateCartQuantity } from '../../../Redux/Cart/cartSlice';

const CartItem = ({ unik, imageSrc, productName, price, savings, qty, decreaseQuantity, increaseQuantity, removeItem }) => {
  return (
    <tr className="border-b">
      <td className="py-2 px-2 sm:py-4 sm:px-4 flex items-center">
        <img src={imageSrc} alt="Product Image" className="w-12 h-12 sm:w-16 sm:h-16 mr-2 sm:mr-4" />
        <div>
          <span className="bg-green-300 text-black text-xs sm:text-xs w-20 sm:w-28 font-semibold mr-2 px-1 sm:px-2.5 py-0.5 rounded">Home Delivery Only</span>
          <p className="text-sm sm:text-base font-medium">{productName}</p>
          <p className="text-xs sm:text-md text-zinc-500">
            Variant: <span className="font-semibold">320gm</span>
          </p>
        </div>
      </td>
      <td className="py-2 px-2 sm:py-4 sm:px-4 text-center">₹{price}</td>
      <td className="py-2 px-2 sm:py-4 text-center fond-bold text-green-500">{savings}</td>
      <td className="py-2 px-2 sm:py-4 text-center items-center">
        <div className="flex flex-row">
          <div className="flex flex-col sm:flex-row items-center justify-center">
            <button className="bg-blue-500 text-white w-6 h-8 sm:w-6 sm:h-8 px-1 sm:px-2 py-1 rounded-t sm:rounded-l mb-1 sm:mb-0" onClick={() => decreaseQuantity(unik)}>-</button>
            <input type="number" value={qty} readOnly min="1" className="w-12 sm:w-12 text-center border mb-1 sm:mb-0" />
            <button className="bg-blue-500 text-white w-6 h-8 sm:w-6 sm:h-8 sm:px-2 py-1 rounded-b sm:rounded-r mb-1 sm:mb-0" onClick={() => increaseQuantity(unik)}>+</button>
          </div>
          <div className="flex items-center justify-center mt-1">
            <button className="text-red-500 mx-3" onClick={() => removeItem(unik)}>
              <BsFillTrashFill className="text-xl" />
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

const Cart = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [viewport, setViewport] = useState(false);
console.log(items)
  useEffect(() => {
    dispatch(fetchCart());
    
  }, [dispatch]);

  const checkOut = () => {
    navigate('/checkout');
  };

  const increaseQuantity = (id) => {
    const item = items.find(item => item.id === id);
    dispatch(updateCartQuantity({ productId: id, quantity: item.qty + 1 }));
  };

  const decreaseQuantity = (id) => {
    const item = items.find(item => item.id === id);
    if (item.qty > 1) {
      dispatch(updateCartQuantity({ productId: id, quantity: item.qty - 1 }));
    }
  };

  const removeItem = (id) => {
     dispatch(removeFromCart(id));
  };

  const clearCartItems = () => {
    dispatch(clearCart());
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setViewport(window.innerWidth < 620);
  //   };
  //   handleResize();
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="h-[800px]">
      {viewport ? <MobNavBar /> : <Navbar number={12} />}
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/4">
            <h3 className="text-lg mb-4">Cart / <span className="text-green-500 font-semibold">Checkout</span> / Confirmation ({items.length} items)</h3>
            <div className="overflow-x-auto rounded-md bg-white border">
              <table className="min-w-full">
                <thead className="py-5">
                  <tr>
                    <th className="py-2 px-2 sm:py-2 sm:px-4 border-b">Product</th>
                    <th className="py-2 px-2 sm:py-2 sm:px-4 border-b">You Pay</th>
                    <th className="py-2 px-2 sm:py-2 sm:px-4 border-b">You Save</th>
                    <th className="py-2 px-2 sm:py-2 sm:px-4 border-b">No. of items</th>
                    <th className="py-2 px-2 sm:py-2 sm:px-4 border-b"></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map(item => (
                    <CartItem
                      key={item._id}
                      unik={item._id}
                      imageSrc={Array.isArray(item.imageUrl) && item.image.length > 0 ? item.imageUrl[0] : item.imageUrl}
                      productName={item.name}
                      price={item.price}
                      savings={item.discount}
                      qty={item.qty}
                      decreaseQuantity={decreaseQuantity}
                      increaseQuantity={increaseQuantity}
                      removeItem={removeItem}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-1 text-right">
              <button className="text-red-500 text-sm mr-2" onClick={clearCartItems}>Remove all</button>
            </div>
          </div>
          <div className="w-full lg:w-1/4 mt-8 lg:mt-10 lg:ml-8">
            <div className="bg-white p-4 border rounded-md">
              <h3 className="text-lg font-semibold mb-4">Price Summary</h3>
              <div className="flex justify-between mb-2">
                <span>Cart Total</span>
                <span>₹ {total}</span>
              </div>
              <div className="flex justify-between mb-2">
                <div className="group relative">
                  <button>
                    <span className="flex items-center gap-2">Delivery Charge <FaCircleInfo /></span>
                  </button>
                  <div className="absolute left-13 bottom-6 hidden mt-2 p-2 text-sm text-white bg-black border border-gray-300 rounded shadow-lg w-60 group-hover:block">
                    <ul>
                      <li>Home Delivery : Flat Rs. 29</li>
                      <li>Pick Up Point : Free Delivery</li>
                    </ul>
                  </div>
                </div>
                <span className="text-red-500">+ Extra</span>
              </div>
              <button className="w-full bg-green-500 text-white py-2 rounded-full" onClick={checkOut}>PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
