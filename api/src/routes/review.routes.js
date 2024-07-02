import express from "express";
import authenticate from "../middelwares/authenticat.js";
const router = express.Router();
import {createview,getAllview} from "../controller/review.controller.js";

router.post("/create",createview);
router.get("/product/:productId",authenticate,getAllview);


export default router;