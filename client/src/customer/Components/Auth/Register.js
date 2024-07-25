import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from '../assets/register.png';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../../axiosConfig";
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
//   {
//     "user": {
//         "uid": "2ohd2IsJYQWdxzatSwqKS2lIEZE3",
//         "email": "shankjbs571@gmail.com",
//         "emailVerified": true,
//         "displayName": "Shashank Kumar",
//         "isAnonymous": false,
//         "photoURL": "https://lh3.googleusercontent.com/a/ACg8ocLaW_81K_OBndvqWmjUUYMz4jJB7K5dI1n6jFGjeJ_21hweCNo=s96-c",
//         "providerData": [
//             {
//                 "providerId": "google.com",
//                 "uid": "115328458095770254517",
//                 "displayName": "Shashank Kumar",
//                 "email": "shankjbs571@gmail.com",
//                 "phoneNumber": null,
//                 "photoURL": "https://lh3.googleusercontent.com/a/ACg8ocLaW_81K_OBndvqWmjUUYMz4jJB7K5dI1n6jFGjeJ_21hweCNo=s96-c"
//             }
//         ],
//         "stsTokenManager": {
//             "refreshToken": "AMf-vByRSUksiTbXeWyy4NKaRcrkfcxKFPdtFH0pMKz93TuKkOhBw1OTSwTYY8CO2Nn4z3WDRAXm5D96wOQ6fX0F_hZPYzv_eiFbYXorsSQINuS4OA5Vx0kwEmUcRyus6KQPU2kyM84uPwKLvwxD2AFo8r-lF4zlAFH3MStIjf_47yYyEk6P2ZCOvy6wXz9WDy2uOhxxYpMJuXxUuNwfDZEgBhIPJZ-RqfccYNI9xrVHkImKMzVh8Gf8_foapgpBOafkz939f_ko0xI-jTXs90V37-F3ATYW7BtzRi21XIlq1X2LdUQgw8jV5ljAHFDQ4Gas-vfNZaSrpS7q6pStupoPIAu5PpGRP_gnBmo0rM8-So6hnBfxg6EJ6Zl2b3FepxBqIQQH-mwCA8q1TNTG9H7ZZilmaF2tcHakbxkpwyWSIyFA9xsOxjk8RifYC3l-wgHIhrzYDGiu",
//             "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImMxNTQwYWM3MWJiOTJhYTA2OTNjODI3MTkwYWNhYmU1YjA1NWNiZWMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiU2hhc2hhbmsgS3VtYXIiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jTGFXXzgxS19PQm5kdnFXbWpVVVlNejRqSkI3SzVkSTFuNmpGR2plSl8yMWh3ZUNObz1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9lY29tbWVyY2UtNGEyMjYiLCJhdWQiOiJlY29tbWVyY2UtNGEyMjYiLCJhdXRoX3RpbWUiOjE3MjE2MjQ1NzgsInVzZXJfaWQiOiIyb2hkMklzSllRV2R4emF0U3dxS1MybElFWkUzIiwic3ViIjoiMm9oZDJJc0pZUVdkeHphdFN3cUtTMmxJRVpFMyIsImlhdCI6MTcyMTYyNDU3OCwiZXhwIjoxNzIxNjI4MTc4LCJlbWFpbCI6InNoYW5ramJzNTcxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTE1MzI4NDU4MDk1NzcwMjU0NTE3Il0sImVtYWlsIjpbInNoYW5ramJzNTcxQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.T0Ys36GtgxqDI1V1pSSaBMYcun1st6AJ0T5-UdVITUGNKHvKjaMWt4M4SUurhECAGle9Vh7vVohWIbcfXs0BHmVm9Ink3fkKiFRL2-n-ms25mb2F70_O0jTljMEK3KEJ8xpEgnSMQU22tCNTYHMK5KwSlKLwdrllkfmsqYy03lDFVinLQPH9WN9dMQ1zLcof0EymqhMFcRKr6HKyjqN38RVRsAsu9eGECOgmbKLlD5u_cuSfs5YhWmKAITe1N7PiZvf4x_qVRAp8GxscMSDg62v1ALgReyqTyRHz9Rtvn0yCaj827BDX68S-SOAnkHH3iIF7nN6KL91D-xaF1mc7HQ",
//             "expirationTime": 1721628178147
//         },
//         "createdAt": "1721524480240",
//         "lastLoginAt": "1721624512285",
//         "apiKey": "AIzaSyAenDLRKK1dvF3cDlxGFDeWAV-4x4BoZZY",
//         "appName": "[DEFAULT]"
//     },
//     "providerId": "google.com",
//     "_tokenResponse": {
//         "federatedId": "https://accounts.google.com/115328458095770254517",
//         "providerId": "google.com",
//         "email": "shankjbs571@gmail.com",
//         "emailVerified": true,
//         "firstName": "Shashank",
//         "fullName": "Shashank Kumar",
//         "lastName": "Kumar",
//         "photoUrl": "https://lh3.googleusercontent.com/a/ACg8ocLaW_81K_OBndvqWmjUUYMz4jJB7K5dI1n6jFGjeJ_21hweCNo=s96-c",
//         "localId": "2ohd2IsJYQWdxzatSwqKS2lIEZE3",
//         "displayName": "Shashank Kumar",
//         "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImMxNTQwYWM3MWJiOTJhYTA2OTNjODI3MTkwYWNhYmU1YjA1NWNiZWMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiU2hhc2hhbmsgS3VtYXIiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jTGFXXzgxS19PQm5kdnFXbWpVVVlNejRqSkI3SzVkSTFuNmpGR2plSl8yMWh3ZUNObz1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9lY29tbWVyY2UtNGEyMjYiLCJhdWQiOiJlY29tbWVyY2UtNGEyMjYiLCJhdXRoX3RpbWUiOjE3MjE2MjQ1NzgsInVzZXJfaWQiOiIyb2hkMklzSllRV2R4emF0U3dxS1MybElFWkUzIiwic3ViIjoiMm9oZDJJc0pZUVdkeHphdFN3cUtTMmxJRVpFMyIsImlhdCI6MTcyMTYyNDU3OCwiZXhwIjoxNzIxNjI4MTc4LCJlbWFpbCI6InNoYW5ramJzNTcxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTE1MzI4NDU4MDk1NzcwMjU0NTE3Il0sImVtYWlsIjpbInNoYW5ramJzNTcxQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.T0Ys36GtgxqDI1V1pSSaBMYcun1st6AJ0T5-UdVITUGNKHvKjaMWt4M4SUurhECAGle9Vh7vVohWIbcfXs0BHmVm9Ink3fkKiFRL2-n-ms25mb2F70_O0jTljMEK3KEJ8xpEgnSMQU22tCNTYHMK5KwSlKLwdrllkfmsqYy03lDFVinLQPH9WN9dMQ1zLcof0EymqhMFcRKr6HKyjqN38RVRsAsu9eGECOgmbKLlD5u_cuSfs5YhWmKAITe1N7PiZvf4x_qVRAp8GxscMSDg62v1ALgReyqTyRHz9Rtvn0yCaj827BDX68S-SOAnkHH3iIF7nN6KL91D-xaF1mc7HQ",
//         "context": "",
//         "oauthAccessToken": "ya29.a0AXooCgvJuxbTBohk4eNgBK7Uhj19PHlNNjO4gBoDXR770jgBy0e8Qe7cxP0JokJ4iK4hj4lwNUdBTA-BJoCNtsnz8LpoDpYWzfNuUb1c8dfmrUgy-TZTmCnB5G1veAY85STLmDSOrJj6oK5LctYvLmMmD7iih2WbusgaCgYKAVkSARMSFQHGX2MiOpXBmPyrl9WHypicpMIpdQ0170",
//         "oauthExpireIn": 3598,
//         "refreshToken": "AMf-vByRSUksiTbXeWyy4NKaRcrkfcxKFPdtFH0pMKz93TuKkOhBw1OTSwTYY8CO2Nn4z3WDRAXm5D96wOQ6fX0F_hZPYzv_eiFbYXorsSQINuS4OA5Vx0kwEmUcRyus6KQPU2kyM84uPwKLvwxD2AFo8r-lF4zlAFH3MStIjf_47yYyEk6P2ZCOvy6wXz9WDy2uOhxxYpMJuXxUuNwfDZEgBhIPJZ-RqfccYNI9xrVHkImKMzVh8Gf8_foapgpBOafkz939f_ko0xI-jTXs90V37-F3ATYW7BtzRi21XIlq1X2LdUQgw8jV5ljAHFDQ4Gas-vfNZaSrpS7q6pStupoPIAu5PpGRP_gnBmo0rM8-So6hnBfxg6EJ6Zl2b3FepxBqIQQH-mwCA8q1TNTG9H7ZZilmaF2tcHakbxkpwyWSIyFA9xsOxjk8RifYC3l-wgHIhrzYDGiu",
//         "expiresIn": "3600",
//         "oauthIdToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImYyZTExOTg2MjgyZGU5M2YyN2IyNjRmZDJhNGRlMTkyOTkzZGNiOGMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMzM0MTIwNzE1ODQ1LWp0ZTBzOTQ3c2Mya3NvN3N0MXNpODZ0YjMwYjNxbWxhLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMzM0MTIwNzE1ODQ1LWp0ZTBzOTQ3c2Mya3NvN3N0MXNpODZ0YjMwYjNxbWxhLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE1MzI4NDU4MDk1NzcwMjU0NTE3IiwiZW1haWwiOiJzaGFua2piczU3MUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6InlueGFJenh0TjNZQzJzVWcycUFIRkEiLCJpYXQiOjE3MjE2MjQ1NzgsImV4cCI6MTcyMTYyODE3OH0.Ahb_wnr7wX0B4-Pbw782m2RyBvH-OQojwr9DwykZXrjObNKb7yA06LSqHV5QyvBj45CoYrj5Sf1-pSsd74qOrIt0fsl1EGIxTiU60IKZhF60hx6Qj2_ffPk4JXjGf1faUpillNcoWUP3Iy7X3_I1GkVC0P7CBBnRzP-T2Suz5GEhtEeLXIvthGpJDB1IE2wtOcgDkbQBbSSf8iJABijeR00yT0zIspqkmNZDaniGrgZ8WQ6LgRtYAsq_rOlmd8meBJjpvT7GJCL8LOZUoW3EH3sD5T4tNdigAerHBtdY_-UHW87La1clAFqhyyG1A_Wy8pbh5644-0VX55r95D_qzw",
//         "rawUserInfo": "{\"name\":\"Shashank Kumar\",\"granted_scopes\":\"https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/userinfo.email\",\"id\":\"115328458095770254517\",\"verified_email\":true,\"given_name\":\"Shashank\",\"family_name\":\"Kumar\",\"email\":\"shankjbs571@gmail.com\",\"picture\":\"https://lh3.googleusercontent.com/a/ACg8ocLaW_81K_OBndvqWmjUUYMz4jJB7K5dI1n6jFGjeJ_21hweCNo=s96-c\"}",
//         "kind": "identitytoolkit#VerifyAssertionResponse"
//     },
//     "operationType": "signIn"
// }

const handlegoogleLogin = async (email,password) => {
  // e.preventDefault();
  setLoading(true);
  try {
    const response = await axios.post(`/auth/login`, { email, password }, { withCredentials: true });
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

  const SignIn = () => {
    const logGoogleUser = async () => {
      const response = await signInWithGooglePopup();
      console.log(response);
      const email = response.user.email;
      const username = response.user.displayName;
      const password = response.user.uid;

      console.log(`Email: ${email}, Username: ${username}`);
      console.log("opt func called");
      try {
        const payload = {
          email: email,
          userName:username,
          password:password
        };
        console.log("Sending payload:", payload); // Log the payload for debugging
  
        const response = await axios.post('http://localhost:5454/api/auth/registerWithGoogle', payload);
        if (response.data.status) {
          toast.success("Your data is sent successfully. User created.");
          navigate('/login'); // Redirect to login page upon successful user creation

        } else {
            if (response.data.message === 'User already exists') {
              toast.info("User already exists. Please log in.");
              handlegoogleLogin(email,password);
              // navigate('/login'); 
            } else {
                toast.error("Failed to create User");
        }
        }
      } catch (error) {
        console.error("Error sending your data:", error);
        toast.error("An error occurred while sending your data. Please try again.");
      } finally {
        setLoading(false);
      }

      // window.location.href = '/';
    }
      return (
        <div>
            <button onClick={logGoogleUser}>Continue With Google</button>
        </div>
      )
  }

  const handleGoogle = (e) => {
    e.preventDefault();
  }


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

  const handleSendOTP = async (event = null) => {
    if (event) {
      event.preventDefault();
    }
    setLoading(true);
    try {
      const response = await axiosInstance.post(`/auth/register`, { [contactMethod]: contactValue });
      console.log("this si contact method:"+contactMethod+"this si svlaue: "+contactValue);
      const response = await axios.post(`http://localhost:5454/api/auth/register`, { [contactMethod]: contactValue });
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

  return (
    showModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-50">
        <div className="bg-white dark:bg-card bg-opacity-95 w-full lg:max-w-4xl h-[600px] mx-auto rounded-lg shadow-lg flex flex-col md:flex-row">
          
          <div className="bg-green-100 p-8 flex-1 hidden lg:flex items-center flex-col justify-between">
            <div className='text-primary-foreground p-6 rounded-lg max-w-sm'>
              <h2 className='text-3xl font-bold text-gray-700 mb-4'>Register</h2>
              <p className='text-muted-foreground text-gray-600'>
                Create your account to start shopping!
              </p>
            </div>
            <img
              src={logo}
              alt="Illustration of a woman shopping"
              className="max-w-full bg-cover h-[300px] w-[400px]"
            />
          </div>
          <div className="p-8 flex-1">
            <div className="flex justify-between items-center mb-4">
              {!otpSent && (
                <img src="./apala bazar.png" alt="Logo" className="max-w-20" />
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
                      className={`w-full p-2 ${sharedClasses.borderZinc} rounded border-gray-600 border-[1px] ${sharedClasses.darkBgInput} ${sharedClasses.darkBorderZinc}`}
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
                      className={`w-full p-2 ${sharedClasses.borderZinc} rounded border-gray-600 border-[1px] ${sharedClasses.darkBgInput} ${sharedClasses.darkBorderZinc}`}
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
                      className={`w-full p-2 ${sharedClasses.borderZinc} rounded border-gray-600 border-[1px] ${sharedClasses.darkBgInput} ${sharedClasses.darkBorderZinc}`}
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
                className={`w-full py-2 ${sharedClasses.bgZinc} ${sharedClasses.textZinc} rounded ${loading ? "cursor-not-allowed" : ""}`}
                disabled={loading}
              >
                {loading ? "SENDING..." : otpSent ? "VERIFY OTP" : "CONTINUE"}
              </button>
                <div class="flex mt-4 items-center w-full justify-center">
                    <div class="px-4 py-2 w-full border flex justify-center gap-2 border-slate-200  rounded-lg text-slate-700  hover:border-slate-400  hover:bg-gray-100 hover:text-slate-900 hover:shadow transition duration-150">
                        <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
                        <SignIn />
                    </div>
                </div>
            
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
