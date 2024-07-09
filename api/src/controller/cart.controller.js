import Cart from "../models/cart.model.js";
import CartItem from "../models/cartItem.model.js";
import Product from "../models/product.model.js";
import User from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Address from "../models/address.model.js";
import {ApiError} from "../utils/ApiError.js"



const addToCart = asyncHandler(async (req, res) => {

    const { id } = req.user;

    const { productId } = req.body;

    const user = await User.findById(id);

    try {
        
        const product = await Product.findById(productId);

        if (!product) {
            return res
            .status(404)
            .json(new ApiResponse(404, 'Product not found', null));
        }


        // const findCart = await Cart.findOne({_id: id});

            // console.log("findCart => ", findCart);
        
        // const items = findCart.cartItems;

        // const length = items.length;

        let totalPrice = 0;

        // items.map((item) => {

        //     totalPrice += item.price;
        // });



        const cartItem = await CartItem.create({
           
            quantity: 1,
            price: product.price,
            discountedPrice: product.discountedPrice,
            userId: id, 
            product: product._id,
            size: product.size,
            createdAt: new Date(),
            updatedAt: new Date()
        });

      

        // const cart = await Cart.create({
        //     totalPrice: totalPrice,
        
 
        // })

   
        return res
        .status(200)
        .json(new ApiResponse(200, 'Product added to cart successfully', cartItem));
    } 
    
    catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}); 



const getCartDetails = asyncHandler(async (req, res) => {

    const { id } = req.user;

    if(!id) {
        return res
            .status(401)
            .json(new ApiError(401, 'id is not set in cookies', 'User not logged in'));
    }

    const user = await User.findById(id);

    if(!user) {
        return res
            .status(401)
            .json(new ApiError(401, 'User not found', ));
    }
    


    try {

        const cart = await Cart.findOne({_id: id});

        if (!cart) {
            return res
            .status(404)
            .json(new ApiResponse(404, 'Cart is empty for this user', null));
        }


       return res
            .status(200)
            .json(new ApiResponse(200, 'Cart retrieved successfully', cart));
    } 
    
    catch (error) {

        console.error("error => ", error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }

});



const getCartItemsById = asyncHandler(async (req, res) => {

    const { id } = req.user;

    const { productId } = req.query;

    console.log("productId => ", productId);

    const user = await User.findById(id);

    if(!user) {
        return res
            .status(401)
            .json(new ApiError(401, 'User not found', ));
    }

    try {

        const cart = await CartItem.findOne({product: productId});

        const detail = await CartItem.find({userId: id});

        if (!cart) {
            return res  
            .status(404)
            .json(new ApiResponse(404, 'Cart not found', null));
        }

        const cartItems = await CartItem.find({_id: cart._id});

        return res
            .status(200)
            .json(new ApiResponse(200, 'Cart items retrieved successfully', detail));

    } 
    
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});



const removeOneCart = asyncHandler(async (req, res) => {

    const { id } = req.user;

    const { itemId } = req.query;

    const user = await User.findById(id);

    if(!user) {
        return res
            .status(401)
            .json(new ApiError(401, 'User not found', ));
    }

    try {

        // const item = await CartItem.findOne({product: productId});


        const cartItems = await CartItem.findByIdAndRemove({_id: itemId});


        // if (!cartItems) {
        //     return res
        //         .status(404)
        //         .json(new ApiResponse(404, 'Cart item not found', null));
        // }
        

       return res
            .status(200)
            .json(new ApiResponse(200, 'Cart item deleted successfully', cartItems));
    } 
    
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }

});


const removeAllCart = asyncHandler(async(req, res) => {

    const { id } = req.user;

    const user = await User.findById(id);
    if(!user) {
        return res
            .status(401)
            .json(new ApiError(401, 'User not found', ));
    }

    try {
        const cart = await Cart.findOne({_id: id});
        if (!cart) {
            return res
                .status(404)
                .json(new ApiResponse(404, 'Cart not found', null));
        }

        await cart.remove();
        await cart.save();
       

        return res
            .status(200)
            .json(new ApiResponse(200, 'Cart deleted successfully', cart));
    } 
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }

})







//// export the cart controllers
export {
    addToCart,
    getCartDetails,
    getCartItemsById,
    removeOneCart,
    removeAllCart
}

