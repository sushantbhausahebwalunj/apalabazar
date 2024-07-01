import Cart from '../models/cart.model.js';
import CartItem from '../models/cartItem.model.js';
import Product from '../models/product.model.js';
import User from '../models/user.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
// Update user
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    if (req.user.id !== id && req.user.role !== 'ADMIN') {
        return res.status(403).json({ message: 'Forbidden: You cannot update this user', status: false });
    }

    try {
        const user = await User.findByIdAndUpdate(id, updates, { new: true });

        if (!user) {
            return res.status(404).json({ message: 'User not found', status: false });
        }

        return res.status(200).json({ message: 'User updated successfully', status: true, data: user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', status: false });
    }
};

// Delete user
export const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (req.user.id !== id && req.user.role !== 'ADMIN') {
        return res.status(403).json({ message: 'Forbidden: You cannot delete this user', status: false });
    }

    try {
        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found', status: false });
        }

        return res.status(200).json({ message: 'User deleted successfully', status: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', status: false });
    }
};


// Get user
export const getUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found', status: false });
        }

        return res.status(200).json({ message: 'User retrieved successfully', status: true, data: user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', status: false });
    }
};



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


        const findCart = await Cart.findOne({_id: id});

        
        const items = findCart.cartItems;

        const length = items.length;

        let totalPrice = 0;

        items.map((item) => {

            totalPrice += item.price;
        });



        const cartItem = await CartItem.create({
           
            quantity: 1,
            price: product.price,
            discountedPrice: product.discountedPrice,
            createdAt: new Date(),
            updatedAt: new Date()
        });

      

        const cart = await Cart.create({
            totalPrice: totalPrice,
            totalItem: length,
 
        })

   
        return res
        .status(200)
        .json(new ApiResponse(200, 'Product added to cart successfully', cartItem, cart));
    } 
    
    catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}); 








export {
    addToCart
}