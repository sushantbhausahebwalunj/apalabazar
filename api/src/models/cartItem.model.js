import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  // cart: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "cart",
  //   required: true,
  // },
  
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products",
    required: true,
  },
  // name:{
  //   type:String,
  //   required: true,
  // },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },

  price: {
    type: Number,
    required: true,
  },

  discountedPrice: {
    type: Number,
    required: true,
  },

  userId: {
    type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
  },

});

const CartItem = mongoose.model("cartItems", cartItemSchema);

export default CartItem;
