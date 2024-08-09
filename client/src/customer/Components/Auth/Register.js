import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import registerlogo from '../assets/register.png';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../../axiosConfig";

import logo from "./logo.png"
import "./register.css"

import logoo from "./logo.png"
import { signInWithGooglePopup } from "../../../firebaseConfig";


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

const Register = ({ showModal, setShowModal }) => {
  const navigate = useNavigate();
  const [contactMethod, setContactMethod] = useState("email");
  const [contactValue, setContactValue] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const closeModal = () => {
    setShowModal(false);
  };

  const handleContactChange = (e) => {
    setContactValue(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axiosInstance.post(`/auth/register`, { [contactMethod]: contactValue });
      if (response.data.status) {
        setOtpSent(true);
        toast.success("OTP sent successfully! Please check your " + (contactMethod === "phone" ? "phone" : "email") + ".");
      } else {
        toast.error("Failed to send OTP");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("An error occurred while sending OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        [contactMethod]: contactValue,
        otp,
        userName,
        password,
      };
      console.log("Sending payload:", payload); // Log the payload for debugging

      const response = await axiosInstance.post('/auth/verify-otp', payload);
      if (response.data.status) {
        toast.success("OTP verified successfully. User created.");
        navigate('/login'); // Redirect to login page upon successful user creation
      } else {
        toast.error("Failed to verify OTP");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("An error occurred while verifying OTP. Please try again.");
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
      // window.location.href = '/'
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
    setLoading(true);
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
    } finally {
        setLoading(false);
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
        navigate('/');


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

  return (
    showModal && (
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
            src={registerlogo}
            alt="Illustration of a person logging in"
          className="max-w-full bg-cover h-[300px] w-[400px] animate-bounce image-hover"
          />
        </div>
          <div className="p-8 flex-1">
            <div className="flex justify-between items-center mb-4">
              {!otpSent && (
          <img src={logo} alt="Logo"   className="max-w-20 logo-move" />
        )}
              <button
                onClick={closeModal}
                className={`${sharedClasses.textZinc} ${sharedClasses.hoverTextZinc} ${sharedClasses.darkTextZinc} ${sharedClasses.darkHoverTextZinc}`}
              >
                <img
                  aria-hidden="true"
                  alt="close-icon"
                  src="https://openui.fly.dev/openui/24x24.svg?text=✖️"
                />
              </button>
            </div>
            <h2 className="text-xl font-semibold mb-3">
              {otpSent ? "Verify OTP" : "Register"}
            </h2>
            {!otpSent && (
              <button
                onClick={() => setContactMethod(contactMethod === "phone" ? "email" : "phone")}
                className="mt-4 text-blue-500 hover:text-blue-600 mb-2"
              >
                {contactMethod === "phone" ? "Register with Email" : "Register with Phone"}
              </button>
            )}
            <form onSubmit={otpSent ? handleVerifyOTP : handleSendOTP}>
              <div className="mb-4">
                <label
                  htmlFor={contactMethod}
                  className={`block ${sharedClasses.textZinc} ${sharedClasses.darkTextZinc} mb-2`}
                >
                  Enter your {contactMethod === "phone" ? "10 digit mobile number" : "email"}
                </label>
                <input
                  type="text"
                  id={contactMethod}
                  value={contactValue}
                  onChange={handleContactChange}
                  className={`w-full p-2 ${sharedClasses.borderZinc} rounded border-gray-600 border-[1px] ${sharedClasses.darkBgInput} ${sharedClasses.darkBorderZinc}`}
                  placeholder={contactMethod === "phone" ? "+91" : "example@example.com"}
                  required
                />
              </div>
              {otpSent && (
                <>
                  <div className="mb-4">
                    <label
                      htmlFor="otp"
                      className={`block ${sharedClasses.textZinc} ${sharedClasses.darkTextZinc} mb-2`}
                    >
                      Enter OTP
                    </label>
                    <input
                      type="text"
                      id="otp"
                      value={otp}
                      onChange={handleOtpChange}
                      className={`w-full text-black p-2 ${sharedClasses.borderZinc} rounded border-gray-600 border-[1px] ${sharedClasses.darkBgInput} ${sharedClasses.darkBorderZinc}`}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="username"
                      className={`block ${sharedClasses.textZinc} ${sharedClasses.darkTextZinc} mb-2`}
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="userName"
                      value={userName}
                      onChange={handleUserNameChange}
                      className={`w-full p-2 text-black ${sharedClasses.borderZinc} rounded border-gray-600 border-[1px] ${sharedClasses.darkBgInput} ${sharedClasses.darkBorderZinc}`}
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
                      className={`w-full p-2 text-black ${sharedClasses.borderZinc} rounded border-gray-600 border-[1px] ${sharedClasses.darkBgInput} ${sharedClasses.darkBorderZinc}`}
                      required
                    />
                  </div>
                </>
              )}
              <p
                className={`text-sm ${sharedClasses.textZinc} ${sharedClasses.darkTextZinc} mb-4`}
              >
                By continuing, you agree to our{" "}
                <a href="#" className="text-green-600 dark:text-green-400">
                  Terms & Conditions
                </a>
                ,{" "}
                <a href="#" className="text-green-600 dark:text-green-400">
                  Refunds Policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-green-600 dark:text-green-400">
                  Privacy Policy
                </a>
              </p>
              <button
                type="submit"
                className={`w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600  text-white rounded transition duration-150 transform hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:scale-105 focus:outline-none active:animate-flash ${sharedClasses.bgZinc} ${sharedClasses.textZinc} rounded ${loading ? "cursor-not-allowed" : ""}`}
                disabled={loading}
              >
                { loading ? <span className="text-white">SENDING...</span> : otpSent ? <span className="text-white">VERIFY OTP</span> : <span className="text-white">CONTINUE</span>}
              </button>
              <GoogleSignINUP />
            </form>
            {!otpSent && (
              <div className="mt-4">
                <p className={`text-sm ${sharedClasses.textZinc} ${sharedClasses.darkTextZinc}`}>
                  Existing User?{" "}
                  <button
                    onClick={() => navigate('/login')}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    Login
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>
        <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      </div>
    )
  );
};

export default Register;
