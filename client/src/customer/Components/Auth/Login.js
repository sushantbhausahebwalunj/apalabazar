import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Register from '../assets/register.png';
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "./logo.png";
import axiosInstance from "../../../axiosConfig";
import {jwtDecode} from "jwt-decode";
import { signInWithGooglePopup } from "../../../firebaseConfig.js";
import "./loginpg.css"


const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
    window.location.href = '/';
  };

  // return (
  //   <div className="flex justify-center mt-4">
  //     <button
  //       onClick={logGoogleUser}
  //       className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:border-gray-400 hover:bg-gray-100 hover:text-gray-900 hover:shadow transition duration-150"
  //     >
  //       <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
  //       Login With Google
  //     </button>
  //   </div>
  // );
};

const sharedClasses = {
  textZinc: "text-zinc-500",
  hoverTextZinc: "hover:text-zinc-700",
  darkTextZinc: "dark:text-zinc-500",
  darkHoverTextZinc: "dark:hover:text-zinc-100",
  bgZinc: "bg-zinc-300",
  borderZinc: "border-zinc-300",
  darkBgInput: "dark:bg-input",
  darkBorderZinc: "dark:border-zinc-600",
};

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('authToken');
        localStorage.removeItem('role');
        toast.error("Session expired. Please log in again.");
        navigate("/login");
      }
    }
  }, [navigate]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axiosInstance.post('/auth/login', { email, password }, { withCredentials: true });
      if (response.data.status) {
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('role', response.data.data.role);
        toast.success("Login successful");

        if (response.data.data.role === 'ADMIN') {
          navigate('/admin');
        } else {
          navigate('/');
        }
      } else {
        toast.error("Invalid email or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error("An error occurred during login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const GoogleSignINUP = () => {
    const logGoogleUser = async () => {
      const response = await signInWithGooglePopup();
      console.log(response);
      const user = response.user;
      const email = user.email;
      const userName = user.displayName;
      const uniqueUserID = user.uid;
      console.log('Email:', user.email);
      console.log('Username:', user.displayName);
      console.log('Unique User ID:', user.uid);
      await handleRegisterWithGoogle(email, userName, uniqueUserID);
      }
      return (
        <div class="flex mt-4 items-center w-full justify-center">
            <div class="px-4 py-2 w-full border flex justify-center gap-2 border-slate-200  rounded-lg text-slate-700  hover:border-slate-400  hover:bg-gray-100 hover:text-slate-900 hover:shadow transition duration-150">
                <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
                <button onClick={logGoogleUser}>Continue With Google</button>
            </div>
        </div>
      );
  }
  
  const handleRegisterWithGoogle = async (email, userName, uniqueUserID) => {
    try {
        const payload = {
            email,
            userName,
            password: uniqueUserID,
        };
        console.log("Sending payload:", payload); 
        const response = await axiosInstance.post('/auth/registerWithGoogle', payload);
        if (response.data.status) {
            toast.success("Google registration successful. User created.");
            toast.success("A Moment Logging you in!");
            handleLoginwithGoogle(email, uniqueUserID);
  
        } else if (response.data.message === "User already exists") {
            // User already exists, log them in
            // await handleLoginWithGoogle(email, uniqueUserID);
            handleLoginwithGoogle(email, uniqueUserID);
            toast.success("User already exist");
        }
    } catch (error) {
        console.error("Error registering with Google:", error);
        toast.error("An error occurred while registering with Google. Please try again.");
    } 
  };
  
  const handleLoginwithGoogle = async (email, password ) => {
    try {
      console.log("inside handleLoginwithGoogle: ",email,password);
      const response = await axiosInstance.post(`/auth/login`, { email, password }, { withCredentials: true });
      if (response.data.status) {
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('role', response.data.data.role);
        toast.success("Login successful");
  
        if (response.data.data.role === 'ADMIN') {
          navigate('/admin');
        } else {
          navigate('/');
        }
      } else {
        toast.error("Invalid email or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error("An error occurred during login. Please try again.");
    } 
  };

  return (
    <div className="min-h-screen fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-50">
      <div className="bg-white dark:bg-card dark:text-white w-full max-w-4xl mx-auto rounded-lg shadow-lg flex flex-col md:flex-row animate-fadeIn">
      <div className="bg-blue-100 hover-bg-blue p-8 flex-1 hidden lg:flex items-center flex-col justify-between animate-slideInLeft">
      <div className="text-primary-foreground p-6 rounded-lg max-w-sm">
            <h2 className="text-3xl font-bold text-gray-700 mb-4">Welcome Back!</h2>
            <p className="text-muted-foreground text-gray-600">
              Log in to continue shopping with us!
            </p>
          </div>
          <img
            src={Register}
            alt="Illustration of a person logging in"
          className="max-w-full bg-cover h-[300px] w-[400px] animate-bounce image-hover"
          />
        </div>
        <div className="p-8 flex-1 animate-slideInRight">
          <div className="flex justify-between items-center mb-5">
          <Link to="/" className="link-style text-xs">
  Back to Home
</Link>
<Link to="/signup" className="link-style text-xs">
  Sign Up
</Link>

          </div>
          <img src={logo} alt="Logo"   className="max-w-20 logo-move" />
          <h2 className="text-xl text-black font-bold mb-4">Login</h2>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className={`block ${sharedClasses.textZinc} ${sharedClasses.darkTextZinc} mb-2`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className={`w-full p-2 ${sharedClasses.borderZinc} rounded border-gray-600 border-[1px] text-black ${sharedClasses.darkBgInput} ${sharedClasses.darkBorderZinc} transition duration-150 focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className={`block ${sharedClasses.textZinc} ${sharedClasses.darkTextZinc} mb-2`}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className={`w-full p-2 ${sharedClasses.borderZinc} text-black rounded border-gray-600 border-[1px] ${sharedClasses.darkBgInput} ${sharedClasses.darkBorderZinc} transition duration-150 focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded transition duration-150 transform hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:scale-105 focus:outline-none active:animate-flash ${loading ? "cursor-not-allowed" : ""}`}
              disabled={loading}
            >
              {loading ? "LOGGING IN..." : "LOGIN"}
            </button>

            <SignIn />

            <GoogleSignINUP />

          </form>
        </div>
      </div>
      <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default Login;