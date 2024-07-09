import React, { useContext } from "react";
import { BiMinus } from "react-icons/bi";
import UiContext from "../context/UiContext";

const MessageWindow = () => {
  const { closeMessageWindow } = useContext(UiContext);
  return (
    <div className="size-[35rem] bg-white fixed z-50 bottom-0 right-40 shadow-xl rounded-lg flex flex-col justify-between">
      <div>
        <div className=" flex justify-between p-3 items-center bg-slate-200">
          <div className="text-xl">New message</div>
          <div className="flex items-center gap-6 text-xl font-bold cursor-pointer">
            <BiMinus />
            <button className="mr-5" onClick={() => closeMessageWindow()}>
              x
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col p-3">
          <input
            type="text"
            placeholder="to"
            className="outline-none border-b p-3"
          />
          <input
            type="text"
            placeholder="subject"
            className="outline-none border-b p-3"
          />

          <textarea className="h-[20rem] outline-none p-3"></textarea>
        </div>
      </div>

      <div className="flex items-start m-5 ml-9">
        <button className="bg-blue-600 w-32 p-2 rounded-full text-xl text-white">
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageWindow;
