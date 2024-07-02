import Rating from "../models/rating.model.js";
import {findProductById} from "../services/product.js"

async function createRating(req,user) {
  const product = await findProductById(req.body.productId)
  const rating = new Rating({
    product: product._id,
    user: user._id,
    rating: req.body.rating,
    createdAt: new Date(),
  });
 
   await rating.save();
   return console.log("Rating Added")
}

async function getProductsRating(productId) {
  return await Rating.find({ product: productId });
}



export {
  createRating,
  getProductsRating,
};
