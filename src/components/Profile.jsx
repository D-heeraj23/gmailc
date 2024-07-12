import React from "react";
import { CgProfile } from "react-icons/cg";
import { GoSignOut } from "react-icons/go";
import { authActions, uiAction } from "../store";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const email = localStorage.getItem("email");
  const dispatch = useDispatch();
  const history = useHistory();
  const logoutHandler = () => {
    dispatch(authActions.logout());
    localStorage.clear();
    history.replace("/");
    dispatch(uiAction.closeMessageWindowHandler());
    dispatch(uiAction.closeProfileWindowHandler());
  };
  return (
    <div className="fixed top-[4rem] right-0  z-50 p-8 size-[30rem] rounded-lg shadow-lg bg-[#f5f5f5] flex items-center justify-between flex-col">
      <div className="w-full flex justify-end">
        <button
          className="font-bold text-xl"
          onClick={() => dispatch(uiAction.closeProfileWindowHandler())}
        >
          X
        </button>
      </div>
      <div className="text-2xl flex justify-around w-full">{email}</div>
      <CgProfile className="text-[10rem] text-10xl" />
      <button
        className="w-full bg-red-500 p-3 flex items-center justify-center gap-4 text-white text-2xl font-bold h-[4rem] rounded-xl"
        onClick={logoutHandler}
      >
        <span>
          <GoSignOut />
        </span>
        Sign out
      </button>
    </div>
  );
};

export default Profile;
