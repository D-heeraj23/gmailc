import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const history = useHistory();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const signupHandler = async () => {
    if (nameInputRef.current.value.length === 0) {
      toast.error("Name must not be empty");
      return;
    }

    if (
      passwordInputRef.current.value !== confirmPasswordInputRef.current.value
    ) {
      toast.error("Password is not matching");
      return;
    }

    try {
      const resposne = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCxLY8-KHL3Zqam_WgGs0IZvq-54oNUcl0",
        {
          method: "POST",
          body: JSON.stringify({
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value,
            returnSecureToken: true,
          }),
        }
      );

      if (!resposne.ok) {
        let errorMessage = "";
        const data = await resposne.json();
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
        }
        throw new Error(errorMessage);
      }

      alert("signup success now you signin");
      history.replace("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="bg-[#f5f5f5] w-full h-screen flex items-center justify-around flex-col p-8 lg:w-1/2 lg:h-3/4 lg:absolute lg:top-[50%] lg:left-[50%] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:bg-white lg:shadow-2xl lg:rounded-xl lg:p-8">
        <div>
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png"
            alt="google"
            className="w-36"
          />
          <h1 className="text-center text-2xl font-semibold">Sign Up</h1>
          <p className="text-lg text-center">to continue to Gmail</p>
        </div>

        <div className="flex flex-col w-full p-3 gap-7">
          <input
            type="text"
            className="p-2 rounded-lg lg:bg-[#f5f5f5] lg:p-3 outline-blue-500 shadow-md"
            placeholder="name"
            ref={nameInputRef}
          />
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
          <input
            type="text"
            className="p-2 rounded-lg lg:bg-[#f5f5f5] lg:p-3 outline-blue-500 shadow-md"
            placeholder="confirm password"
            ref={confirmPasswordInputRef}
          />
        </div>
        <div className="w-full flex justify-between p-4">
          <button
            className="text-blue-500 font-semibold text-xl"
            onClick={() => history.replace("/")}
          >
            Already have an account
          </button>
          <button
            className="bg-blue-500 text-white font-semibold p-3 w-28 rounded-xl"
            onClick={signupHandler}
          >
            Signup
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signup;
