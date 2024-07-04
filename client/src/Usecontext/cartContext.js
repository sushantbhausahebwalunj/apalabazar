import { createContext, useReducer, useContext, useEffect } from "react";
import reducer from '../Redux/cartReduser'

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem('cart')) || [];

  const [state, dispatch] = useReducer(reducer, initialState);

  const addTocart = (product) => {
    console.log(product);
    alert("Product added successfully");
    dispatch({ type: "ADD", payload: { product } });
  };

  // Use useEffect to update localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ ...state, addTocart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
