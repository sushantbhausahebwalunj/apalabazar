import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  // cart: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "cart",
  //   required: true,
  // },
  
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
    default: 1,
  },

  userId: {
    type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
  },

});

const CartItem = mongoose.model("cartItems", cartItemSchema);

export default CartItem;




