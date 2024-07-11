import express from "express";
import {upload} from "../middleware/multer.middlware.js";
import { addToCart,  getCartDetails, getCartItemsById, removeAllCart, removeOneCart,removeItemQuantityCart } from "../controller/cart.controller.js";
import { verifyToken } from "../middleware/verifyUser.js";
import authenticate from "../middleware/authenticat.js";


const cartRouter = express.Router();


///// cart routes defined here


/// add cart routes 
cartRouter.route("/addCart").post(
    
   authenticate,
    upload.none(),
    addToCart

    /// add cart routes 

);


/// get cart details routes
cartRouter.route("/getCartDetails").get(
    authenticate,
    getCartDetails
);



//// get one cart item by id 
cartRouter.route("/getItemsInfo").get(
    authenticate,
    getCartItemsById
);



/// remove one cart item by id
cartRouter.route("/removeCartItem").delete(
    authenticate,
    removeOneCart
);
cartRouter.route("/removeCartItemQuantity").delete(
    authenticate,
    removeItemQuantityCart
);



/// remove all cart items
cartRouter.route("/removeAllCart").delete(
    authenticate,
    removeAllCart
);


export default cartRouter;