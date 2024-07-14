import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import MobNavBar from '../Navbar/MobileNavbar';
import { BsFillTrashFill } from 'react-icons/bs';
import { FaCircleInfo } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCart, removeFromCart, clearCart, updateCartQuantity,addQuantity } from '../../../Redux/Cart/cartSlice';

const CartItem = ({ unik, actualPrice, imageSrc, productName, price, savings, qty, decreaseQuantity,increaseQuantity, removeItem,prodid }) => {
  return (
    <tr className="border-b">
      <td className="py-2 px-2 sm:py-4 sm:px-4 flex items-center">
        <img src={imageSrc} alt="Product Image" className="w-12 h-12 sm:w-16 sm:h-16 mr-2 sm:mr-4" />
        <div>
          <span className="bg-green-300 text-black text-xs sm:text-xs w-20 sm:w-28 font-semibold mr-2 px-1 sm:px-2.5 py-0.5 rounded">Home Delivery Only</span>
          <p className="text-sm sm:text-base font-medium">{productName}</p>
          {/* <p className="text-xs sm:text-md text-zinc-500">
            Variant: <span className="font-semibold">320gm</span>
          </p> */}
        </div>
      </td>
      <td className="py-2 px-2 sm:py-4 sm:px-4 text-center">₹{actualPrice}</td>
      <td className="py-2 px-2 sm:py-4 sm:px-4 text-center">₹{price}</td>
      <td className="py-2 px-2 sm:py-4 text-center fond-bold text-green-500">{savings}</td>
      <td className="py-2 px-2 sm:py-4 text-center items-center">
        <div className="flex flex-row">
          <div className="flex flex-col sm:flex-row items-center justify-center">
            <button className="bg-blue-500 text-white w-6 h-8 sm:w-6 sm:h-8 px-1 sm:px-2 py-1 rounded-t sm:rounded-l mb-1 sm:mb-0" onClick={() => decreaseQuantity(unik)}>-</button>
            <input type="number" value={qty} readOnly min="1" className="w-12 sm:w-12 text-center border mb-1 sm:mb-0" />
            <button className="bg-blue-500 text-white w-6 h-8 sm:w-6 sm:h-8 sm:px-2 py-1 rounded-b sm:rounded-r mb-1 sm:mb-0" onClick={() => increaseQuantity(prodid)}>+</button>
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
  const [priceSummary, setPriceSummary] = useState({ totalDiscountedPrice: 0, discount: 0 });

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  useEffect(() => {
    if (items && items.length > 0) {
      const totalDiscountedPrice = items[0].reduce((acc, item) => acc + item.product.discountedPrice * item.quantity, 0);
      const totalActualPrice = items[0].reduce((acc, item) => acc + item.product.price * item.quantity, 0);
      const discount = totalActualPrice - totalDiscountedPrice;
      setPriceSummary({ totalDiscountedPrice, discount });
    }
  }, [items]);

  const checkOut = () => {
    navigate('/checkout');
  };

  const increaseQuantity = (id) => {
    const item = items[0].find(item => item._id === id);
    // console.log(id);
    // dispatch(addQuantity(id));
   
      dispatch(addQuantity(id));

  };

  const decreaseQuantity = (id) => {
    const item = items[0].find(item => item._id === id);
    if (item.quantity > 1) {
      dispatch(updateCartQuantity({ productId: id, quantity: item.quantity - 1 }));
    }
  };

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const clearCartItems = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    const handleResize = () => {
      setViewport(window.innerWidth < 620);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  console.log(items);
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!items || items.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div className="h-[800px]">
      {viewport ? <MobNavBar /> : <Navbar number={12} />}
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/4">
            <h3 className="text-lg mb-4">Cart / <span className="text-green-500 font-semibold">Checkout</span> / Confirmation ({items[0].length} items)</h3>
            <div className="overflow-x-auto rounded-md bg-white border">
              <table className="min-w-full">
                <thead className="py-5">
                  <tr>
                    <th className="py-2 px-2 sm:py-2 sm:px-4 border-b">Product</th>
                    <th className="py-2 px-2 sm:py-2 sm:px-4 border-b">Price</th>
                    <th className="py-2 px-2 sm:py-2 sm:px-4 border-b">Apala Bajar Price</th>
                    <th className="py-2 px-2 sm:py-2 sm:px-4 border-b">You Save</th>
                    <th className="py-2 px-2 sm:py-2 sm:px-4 border-b">No. of items</th>
                    <th className="py-2 px-2 sm:py-2 sm:px-4 border-b"></th>
                  </tr>
                </thead>
                <tbody>
                  {items[0].map(item => (
                    <CartItem
                      prodid={item.product._id}
                      unik={item._id}
                      imageSrc={item.product.imageUrl}
                      productName={item.product.title}
                      actualPrice={item.product.price * item.quantity}
                      price={item.product.discountedPrice * item.quantity}
                      savings={(item.product.price - item.product.discountedPrice) * item.quantity}
                      qty={item.quantity}
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
                <span>₹ {priceSummary.totalDiscountedPrice}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>You Saved</span>
                <span>₹ {priceSummary.discount}</span>
              </div>
              <div className="flex justify-between mb-2">
                <div className="group relative">
                  <button>
                    <span className="flex items-center gap-2">Delivery Charge <FaCircleInfo /></span>
                  </button>
                  <div className="absolute left-13 bottom-6 hidden mt-2 p-2 text-sm text-white bg-black border border-gray-300 rounded shadow-lg w-60 group-hover:block">
                    <ul>
                      <li>Home Delivery : Flat Rs. 40</li>
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
