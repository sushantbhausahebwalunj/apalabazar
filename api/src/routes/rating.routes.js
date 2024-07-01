import express from "express";
//import authenticate from "../middleware/authenticat.js";
const router = express.Router();
import {
    createRating,
    getProductsRating,
  } from "../services/rating.service.js";

router.post("/create",createRating);
router.get("/product/:productId",getProductsRating);


 export default router;
