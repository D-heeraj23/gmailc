import React, { useContext } from "react";
import { BiPlus } from "react-icons/bi";
import { BsInbox } from "react-icons/bs";
import { TbTagStarred } from "react-icons/tb";
import { MdSnooze } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { MdLabelImportant } from "react-icons/md";
import { MdDrafts } from "react-icons/md";
import { BiSend } from "react-icons/bi";
import "./Sidebar.css";
import { useDispatch } from "react-redux";
import { uiAction } from "../store";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="w-[20rem] h-screen flex flex-col items-center space-y-2">
        <button
          className="flex items-center justify-center mt-5 p-5 w-40 rounded-full shadow-md bg-white"
          onClick={() => dispatch(uiAction.showMessageWindowHandler())}
        >
          <span>
            <BiPlus className="text-[30px]" />
          </span>
          Compose
        </button>

        <NavLink
          to={"/inbox"}
          activeClassName="active"
          className="flex w-full justify-between items-center h-9 mr-12 p-7"
          style={{ borderRadius: "0 30px 30px 0" }}
        >
          <div className="flex items-center gap-8 p-2 font-bold text-xl ">
            <BsInbox />
            Inbox
          </div>
          <div className="mr-6 font-bold">123</div>
        </NavLink>

        <NavLink
          to={"/starred"}
          className="flex w-full justify-between items-center h-9 mr-12 p-7"
          style={{ borderRadius: "0 30px 30px 0" }}
        >
          <div className="flex items-center gap-8 p-2 font-bold text-xl ">
            <TbTagStarred />
            Starred
          </div>
          <div className="mr-6 font-bold">0</div>
        </NavLink>

        <NavLink
          to={"/snoozed"}
          className="flex w-full justify-between items-center h-9 mr-12 p-7 "
          style={{ borderRadius: "0 30px 30px 0" }}
        >
          <div className="flex items-center gap-8 p-2 font-bold text-xl ">
            <MdSnooze />
            Snoozed
          </div>
          <div className="mr-6 font-bold">23</div>
        </NavLink>
        <NavLink
          to={"/important"}
          className="flex w-full justify-between items-center h-9 mr-12 p-7 "
          style={{ borderRadius: "0 30px 30px 0" }}
        >
          <div className="flex items-center gap-8 p-2 font-bold text-xl ">
            <MdLabelImportant />
            Important
          </div>
          <div className="mr-6 font-bold">0</div>
        </NavLink>
        <NavLink
          to={"/drafts"}
          className="flex w-full justify-between items-center h-9 mr-12 p-7 "
          style={{ borderRadius: "0 30px 30px 0" }}
        >
          <div className="flex items-center gap-8 p-2 font-bold text-xl ">
            <MdDrafts />
            Drafts
          </div>
          <div className="mr-6 font-bold">1</div>
        </NavLink>
        <NavLink
          to={"/sent"}
          className="flex w-full justify-between items-center h-9 mr-12 p-7 "
          style={{ borderRadius: "0 30px 30px 0" }}
        >
          <div className="flex items-center gap-8 p-2 font-bold text-xl ">
            <BiSend />
            Sent
          </div>
          <div className="mr-6 font-bold">1</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
