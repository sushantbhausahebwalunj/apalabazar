import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import MobNavBar from '../Navbar/MobileNavbar';
import { BsFillTrashFill } from 'react-icons/bs';
import { FaCircleInfo } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCart, removeFromCart, clearCart, updateCartQuantity, addQuantity } from '../../../Redux/Cart/cartSlice';
import { fetchCoupons } from '../../../Redux/Coupons/couponSlice';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import logo from "../../../logo.png";

const CartItem = ({ unik, actualPrice, imageSrc, productName, price, savings, qty, decreaseQuantity, increaseQuantity, removeItem, prodid }) => {
  return (
    <tr className="border-b">
      <td className="py-2 px-2 sm:py-4 sm:px-4 flex items-center">
        <img src={imageSrc} alt="Product Image" className="w-12 h-12 sm:w-16 sm:h-16 mr-2 sm:mr-4" />
        <div>
          <span className="bg-green-300 text-black text-xs sm:text-xs w-20 sm:w-28 font-semibold mr-2 px-1 sm:px-2.5 py-0.5 rounded">Home Delivery Only</span>
          <p className="text-sm sm:text-base font-medium">{productName}</p>
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
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { items, status, fetchCartError } = useSelector((state) => state.cart);
  const [viewport, setViewport] = useState(false);

  // COUPONS FETCHING
  const { coupons, status : couponsstatus } = useSelector((state) => state.coupons);
  const [showCouponOverlay, setShowCouponOverlay] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  useEffect(() => {
      dispatch(fetchCoupons());
  }, [dispatch]);

  const applyCoupon = () => {
    if (selectedCoupon) {
      console.log('Applying coupon:', selectedCoupon);
      setSelectedCoupon(null);
      setShowCouponOverlay(false);
    }
  };
  // END COUPONS FETCHING



  const handleAddToCart = async () => {
    const resultAction = await dispatch(fetchCart());
    if (fetchCart.rejected.match(resultAction) && resultAction.payload && resultAction.payload.isUnauthorized) {
      navigate('/login');
    }
  };

  useEffect(() => {
    handleAddToCart();
  }, [dispatch]);

  const categories = useSelector((state) => state.categories.categories);
  const handleSide = (path) => {
    navigate(path);
  };


  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() === "") return; // Check if the search field is empty
    navigate(`/search/${search}`);
  };

  const checkOut = () => {
    navigate('/checkout');
  };

  const increaseQuantity = (id) => {
    const item = items[0].find(item => item._id === id);
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

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!items || items.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    
    <div className="h-[800px]">
 <div>
 <div className="bg-white p-4 border-b-[2px] flex items-center justify-between">
            <a href="/" className="flex items-center space-x-4">
              <img
                src={logo}
                alt="Logo"
                className="h-10"
                crossOrigin="anonymous"
              />
            </a>
            <div className="md:flex items-center hidden ">
              <form onSubmit={handleSearch}>
                <input
                  type="search"
                  placeholder="Search for Biscuits"
                  className="border-[2px] border-zinc-300 rounded-l-md shadow-md p-2 w-[40vw] lg:w-[35vw] dark:bg-white dark:text-black"
                  onChange={(e) => setSearch(e.target.value)}
                  required
                  value={search}
                />
                <button
                  type="submit"
                  className="bg-blue-500 border-[2px] border-blue-500 text-white p-2 rounded-r-lg font-sans"
                >
                  SEARCH
                </button>
              </form>
            </div>
            </div>
 </div>
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/4">
            <h3 className="text-lg mb-4"> <span className="text-green-500 font-semibold">Cart /</span> <span>Checkout</span> / Confirmation ({items[0].length} items)</h3>
            <div className="overflow-x-auto rounded-md bg-white border">
              <table className="min-w-full">
                <thead className="py-5">
                  <tr>
                    <th className="py-2 px-2 sm:py-2 sm:px-4 border-b">Product</th>
                    <th className="py-2 px-2 sm:py-2 sm:px-4 border-b">Price</th>
                    <th className="py-2 px-2 sm:py-2 sm:px-4 border-b">Aapla Bajar Price</th>
                    <th className="py-2 px-2 sm:py-2 sm:px-4 border-b">You Save</th>
                    <th className="py-2 px-2 sm:py-2 sm:px-4 border-b">No. of items</th>
                    <th className="py-2 px-2 sm:py-2 sm:px-4 border-b"></th>
                  </tr>
                </thead>
                <tbody>
                  {items[0].map(item => (
                <CartItem
                      key={item&&item._id}
                      prodid={items&&item&&item.product&&item.product._id}
                      unik={item._id}
                      imageSrc={items&&item&&item.product&&item.product.imageUrl}
                      productName={items&&item&&item.product&&item.product.title}
                      actualPrice={items&&item&&item.product&&item.product.price * item.quantity}
                      price={items&&item&&item.product&&item.product.discountedPrice * item.quantity}
                      savings={(items&&item&&item.product&&item.product.price -item.product.discountedPrice) * item.quantity}
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
                <span>₹ {items&&items[1]&&items[1].totalDiscountedPrice}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>You Saved</span>
                <span>₹ {items&&items[1]&&items[1].discount}</span>
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

              {/* SHWOS HTHE AVAILABEL COUPONS */}
              <div className="relative">
                <button className="bg-blue-500  w-full text-white px-4 mb-2 mt-4 py-2 rounded-full" onClick={() => setShowCouponOverlay(true)}>
                  Apply Coupons
                </button>

                {showCouponOverlay && (
                  <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    {/* <div className="bg-white p-4 rounded-md shadow-lg"> */}
                    <div className="w-1/2 pr-4">
                      <div className="bg-green-100 p-8 rounded-lg shadow-md">
                      <h2 className="text-lg font-semibold mb-2">Select a Coupon</h2>
                      {couponsstatus === "succeeded" && coupons.map((coupon) => (
                         <div key={coupon._id} className="mb-4 p-2 bg-white rounded-lg items-center hover:scale-[1.02] transition duration-300">
                         <div className="flex justify-between p-4 bg-white rounded-lg items-center border-2 border-dashed border-gray-500">
                             <div className="flex items-center">
                                 <div className="mr-3 text-blue-500">
                                     <LocalOfferIcon/>
                                 </div>
                                 <div>
                                     <p className="text-gray-800 font-medium">{coupon.code}: {coupon.discountType === "percentage" ? `${coupon.discountValue}% off` : `${coupon.discountValue} off`}</p>
                                     <p className="text-gray-600">Expires on {new Date(coupon.expirationDate).toLocaleDateString()}</p>
                                 </div>
                             </div>
                             <div className="flex">
                                <input
                                  type="checkbox"
                                  checked={selectedCoupon === coupon._id}
                                  onChange={() => setSelectedCoupon(coupon.id)}
                                  disabled={selectedCoupon && selectedCoupon !== coupon._id}
                                  className="mr-2"
                                />
                                 {/* <div className="mr-3 text-red-300 hover:text-red-500" onClick={(e) => handleDelete(coupon._id,e)}>
                                     <RemoveCircleIcon />
                                 </div> */}
                             </div>
                             
                         </div>
                         </div>
                      ))}
                      <div className="flex justify-end mt-4">
                        <button
                          className="bg-green-300 text-white px-4 py-2 hover:bg-green-600 rounded-full"
                          onClick={applyCoupon}
                          disabled={!selectedCoupon}
                        >
                          Apply
                        </button>
                        <button className="bg-red-300 text-white px-4 hover:bg-red-600 py-2 rounded-full ml-2" onClick={() => setShowCouponOverlay(false)}>
                          Cancel
                        </button>
                      </div>
                    </div>
                    </div>
                  </div>
                )}
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
