import React from "react";
const Signup = () => {
  return (
    <>
      <div className="bg-[#f5f5f5] w-full h-screen flex items-center justify-around flex-col p-12 lg:w-1/2 lg:h-3/4 lg:absolute lg:top-[50%] lg:left-[50%] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:bg-white lg:shadow-2xl lg:rounded-xl lg:p-10">
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
          />
          <input
            type="text"
            className="p-2 rounded-lg lg:bg-[#f5f5f5] lg:p-3 outline-blue-500 shadow-md"
            placeholder="email or number"
          />
          <input
            type="password"
            className="p-2 rounded-lg lg:bg-[#f5f5f5] lg:p-3 outline-blue-500 shadow-md"
            placeholder="password"
          />
          <input
            type="text"
            className="p-2 rounded-lg lg:bg-[#f5f5f5] lg:p-3 outline-blue-500 shadow-md"
            placeholder="confirm password"
          />
        </div>
        <div className="w-full flex justify-between p-4">
          <button className="text-blue-500 font-semibold text-xl">
            Already have an account
          </button>
          <button className="bg-blue-500 text-white font-semibold p-3 w-28 rounded-xl">
            Signup
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
