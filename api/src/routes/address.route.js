import express from "express";
import {upload} from "../middleware/multer.middlware.js";
import { addAddress, deleteAddress, getAllAddress, updateAddress } from "../controller/address.controller.js";
import { verifyToken } from "../middleware/verifyUser.js";
import authenticate from "../middleware/authenticat.js";


const address = express.Router();




//// address routes defined here

address.route("/addAddress").post(
     authenticate,
    upload.none(),
    addAddress
);


address.route("/updateAddress").post(
    verifyToken,
    upload.none(),
    updateAddress
);


address.route("/getAllAddress").get( 
 authenticate,
    upload.none(),
    getAllAddress
);

address.route(`/deleteAddress`).delete(

   authenticate,
    upload.none(),
    deleteAddress

);



export default address;