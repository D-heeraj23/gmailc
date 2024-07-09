import React, { useContext } from "react";
import { BiMinus } from "react-icons/bi";
import UiContext from "../context/UiContext";

const MessageWindow = () => {
  const { closeMessageWindow } = useContext(UiContext);
  return (
    <div className="size-[35rem] bg-white fixed z-50 bottom-0 right-40 shadow-xl rounded-lg">
      <div className=" flex justify-between p-3 items-center bg-slate-200">
        <div className="text-xl">New message</div>
        <div className="flex items-center gap-6 text-xl font-bold cursor-pointer">
          <BiMinus />
          <button className="mr-5" onClick={() => closeMessageWindow()}>
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageWindow;
