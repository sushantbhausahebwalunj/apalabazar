import express from "express";
import {
  checkSession,
  loginUser,
  registerUser,
  signOut,
  verifyOTP,
  registerWithGoogle,
} from "../controller/auth.controller.js";
const router = express.Router();



router.route("/register").post(registerUser);

router.post("/verify-otp", verifyOTP);
router.post("/registerWithGoogle", registerWithGoogle);

router.post("/login", loginUser);

router.get("/signout", signOut);
router.get("/session", checkSession);

export default router;
