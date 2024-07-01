import Rating from "../models/rating.model.js";
import {findProductById} from "../services/product.js"

async function createRating(req, user) {
  console.log(req.params+ " rating services "+user);
  const product = await findProductById(req.productId)
  console.log(product + " rating services ");
  const rating = new Rating({
    product: product._id,
    user: user._id,
    rating: req.rating,
    createdAt: new Date(),
  });
  
  return await rating.save();
}

async function getProductsRating(productId) {
  return await Rating.find({ product: productId });
}



export {
  createRating,
  getProductsRating,
};
