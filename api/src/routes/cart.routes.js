import express from "express";
import {upload} from "../middleware/multer.middlware.js";
import { addToCart,  getCartDetails, getCartItemsById, removeAllCart, removeOneCart,removeItemQuantityCart } from "../controller/cart.controller.js";
import { verifyToken } from "../middleware/verifyUser.js";


const cartRouter = express.Router();


///// cart routes defined here


/// add cart routes 
cartRouter.route("/addCart").post(
    
    // verifyToken,
    // upload.none(),
    addToCart

    /// add cart routes 

);


/// get cart details routes
cartRouter.route("/getCartDetails").get(
    verifyToken,
    getCartDetails
);



//// get one cart item by id 
cartRouter.route("/getItemsInfo").get(
    // verifyToken,
    getCartItemsById
);



/// remove one cart item by id
cartRouter.route("/removeCartItem").delete(
    // verifyToken,
    removeOneCart
);
cartRouter.route("/removeCartItemQuantity").delete(
    // verifyToken,
    removeItemQuantityCart
);



/// remove all cart items
cartRouter.route("/removeAllCart").delete(
    // verifyToken,
    removeAllCart
);


export default cartRouter;