import express from "express";
import { isPincodeAvailable, fetchWaybill } from "../controller/delivery.controller.js";
const deliveryRoute = express.Router();
deliveryRoute.route("/isPincodeAvailable").post(isPincodeAvailable);
deliveryRoute.route("/fetchWaybill").post(fetchWaybill)
export default deliveryRoute;
