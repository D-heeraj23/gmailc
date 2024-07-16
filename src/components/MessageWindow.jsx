import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BeatLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { uiAction } from "../store";

const MessageWindow = () => {
  const [loading, setLoading] = useState(false);
  const [reciverEmail, setReciverEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [textarea, setTextArea] = useState("");
  const dispatch = useDispatch();
  const senderEmail = localStorage.getItem("email");
  const cleanedSenderEmail = senderEmail.replace(/[@.]/g, "");
  const recieverEmailChangeHandler = (e) => {
    setReciverEmail(e.target.value);
  };
  const subjectChangeHandler = (e) => {
    setSubject(e.target.value);
  };
  const textAreaChangeHandler = (e) => {
    setTextArea(e.target.value);
  };

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const mailDataHandler = async () => {
    const data = {
      id: Math.random().toString(),
      cleanedreciverEmail: reciverEmail.replace(/[@.]/g, ""), //dheeroy00gmailcom
      subject,
      textarea,
      senderEmail,
      timeStamp: formatTime(new Date()),
    };
    setLoading(true);
    await fetch(
      `https://c-bc82f-default-rtdb.firebaseio.com/${data.cleanedreciverEmail}.json`, //sending mails dheeroy00gmailcom to fb
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    setLoading(false);
    dispatch(uiAction.closeMessageWindowHandler());

    await fetch(
      `https://c-bc82f-default-rtdb.firebaseio.com/mail${cleanedSenderEmail}.json`, //sending mails for sent
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );
  };

  return (
    <div className="size-[35rem] bg-white fixed z-50 bottom-0 right-40 shadow-xl rounded-lg flex flex-col justify-between">
      <div>
        <div className=" flex justify-between p-3 items-center bg-slate-200">
          <div className="text-xl">New message</div>
          <div className="flex items-center gap-6 text-xl font-bold cursor-pointer">
            <BiMinus />
            <button
              className="mr-5"
              onClick={() => dispatch(uiAction.closeMessageWindowHandler())}
            >
              x
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col p-3">
          <input
            type="text"
            placeholder="to"
            className="outline-none border-b p-3"
            onChange={recieverEmailChangeHandler}
          />
          <input
            type="text"
            placeholder="subject"
            className="outline-none border-b p-3"
            onChange={subjectChangeHandler}
          />

          <textarea
            className="h-[20rem] outline-none p-3"
            onChange={textAreaChangeHandler}
          ></textarea>
        </div>
      </div>

      <div className="flex items-start m-5 ml-9">
        <button
          className="bg-blue-600 w-32 p-2 rounded-full text-xl text-white"
          onClick={mailDataHandler}
        >
          {loading ? (
            <div>
              <BeatLoader color="white" />
            </div>
          ) : (
            "Send"
          )}
        </button>
      </div>
    </div>
  );
};

export default MessageWindow;
