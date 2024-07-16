import React, { useEffect, useState } from "react";
import { BiStar } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { mailAction } from "../store";

const Sent = () => {
  const [sentData, setSentData] = useState([]);
  const email = localStorage.getItem("email");
  const senderEmail = email.replace(/[@.]/g, "");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSentData = async () => {
      const response = await fetch(
        `https://c-bc82f-default-rtdb.firebaseio.com/mail${senderEmail}.json`
      );
      const data = await response.json();
      const loadedData = [];
      for (const key in data) {
        loadedData.push({
          id: data[key].id,
          subject: data[key].subject,
          textarea: data[key].textarea,
          timeStamp: data[key].timeStamp,
        });
      }
      setSentData(loadedData);
    };
    fetchSentData();
  }, []);
  dispatch(mailAction.totalSentMails(sentData));

  return (
    <div className="bg-[#f5f5f5] absolute top-20 left-[20rem] h-screen w-[99rem]">
      <div className="space-y-1">
        {sentData.map((mails, i) => (
          <div
            key={i}
            className="bg-[#f3f3f3] flex justify-between items-center p-2"
          >
            <div>
              <button>
                <span>
                  <BiStar />
                </span>
              </button>
            </div>
            <div className=" w-[15rem] text-lg font-bold">{mails.subject}</div>
            <div className=" w-[60rem] font-bold">{mails.textarea}</div>
            <div className=" w-[6rem] font-semibold">{mails.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sent;
