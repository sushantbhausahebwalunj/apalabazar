import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
  review: {
    type: String,
    // required: true,
  },
  rating: {
    type: Number,
    // required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Review = mongoose.model("reviews", reviewSchema);

export default Review;

