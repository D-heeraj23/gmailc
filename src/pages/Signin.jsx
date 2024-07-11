import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { authActions } from "../store";

const Signin = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();

  const signInHandler = async () => {
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCxLY8-KHL3Zqam_WgGs0IZvq-54oNUcl0",
        {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
        }
      );

      if (!response.ok) {
        let errorMessage = "";
        const data = await response.json();
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      localStorage.setItem("token", data.idToken);
      localStorage.setItem("email", emailInputRef.current.value);
      dispatch(authActions.login());
      history.replace("/inbox");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="bg-[#f5f5f5] w-full h-screen flex items-center justify-around flex-col p-8 lg:w-[40rem] lg:h-3/4 lg:absolute lg:top-[50%] lg:left-[50%] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:bg-white lg:shadow-2xl lg:rounded-xl lg:p-8">
        <div>
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png"
            alt="google"
            className="w-36"
          />
          <h1 className="text-center text-2xl font-semibold">Sign in</h1>
          <p className="text-lg text-center">to continue to Gmail</p>
        </div>

        <div className="flex flex-col w-full p-3 gap-7">
          <input
            type="text"
            className="p-2 rounded-lg lg:bg-[#f5f5f5] lg:p-3 outline-blue-500 shadow-md"
            placeholder="email or number"
            ref={emailInputRef}
          />
          <input
            type="password"
            className="p-2 rounded-lg lg:bg-[#f5f5f5] lg:p-3 outline-blue-500 shadow-md"
            placeholder="password"
            ref={passwordInputRef}
          />
        </div>
        <div className="w-full flex justify-between p-4">
          <button
            className="text-blue-500 font-semibold text-xl"
            onClick={() => history.replace("/signup")}
          >
            Create Account
          </button>
          <button
            className="bg-blue-500 text-white font-semibold p-3 w-28 rounded-xl"
            onClick={signInHandler}
          >
            Login
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signin;
