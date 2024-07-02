import express from "express";
import { deleteUser, getUser, updateUser } from "../controller/user.controller.js";
import { verifyToken } from "../middlewares/verifyUser.js";
import cartRouter from "./cart.routes.js";

const userRouter = express.Router();


userRouter.post('/update/:id', verifyToken, updateUser)
userRouter.delete('/delete/:id', verifyToken, deleteUser)
userRouter.get('/:id', verifyToken, getUser)



userRouter.use('/cart', cartRouter);



export default userRouter;
 