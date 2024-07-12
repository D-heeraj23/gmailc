import React from "react";
import { BiMenu } from "react-icons/bi";
import { BiSquare } from "react-icons/bi";
import { BiBell } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { uiAction } from "../store";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div className=" bg-white flex items-center justify-between border-b top-0 ">
      <div className="flex items-center">
        <BiMenu className="text-2xl m-3 text-[#787878]" />
        <img
          src="https://i.pinimg.com/originals/88/e1/4c/88e14cc7e7fcbb0e0e09de26cec86c61.png"
          alt="gmail"
          className="w-20"
        />
        <div className="font-semibold text-xl">Gmail</div>
      </div>
      <div className="w-[60rem] ">
        <input
          type="text"
          className="bg-[#f5f5f5] p-3 w-full rounded-2xl outline-none"
          placeholder="Search mail"
        />
      </div>
      <div className="flex mr-6 gap-3">
        <BiSquare className=" text-[#787878] text-2xl" />
        <BiBell className="text-[#787878] text-2xl" />
        <CgProfile
          className="text-[#787878] text-2xl"
          onClick={() => dispatch(uiAction.showProfileWindowHandler())}
        />
      </div>
    </div>
  );
};

export default Navbar;
