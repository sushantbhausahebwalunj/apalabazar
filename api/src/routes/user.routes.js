import express from "express";
import { addToCart, deleteUser, getUser, updateUser } from "../controller/user.controller.js";
import { verifyToken } from "../middlewares/verifyUser.js";
import { upload } from "../middlewares/multer.middleware.js"


const userRouter = express.Router();

userRouter.post('/update/:id', verifyToken, updateUser)
userRouter.delete('/delete/:id', verifyToken, deleteUser)
userRouter.get('/:id', verifyToken, getUser)



userRouter.route('/addToCart').post(
    verifyToken,
    upload.none(),
    addToCart
)
   



export default userRouter;
 