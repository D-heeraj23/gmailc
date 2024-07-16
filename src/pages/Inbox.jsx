import React, { useEffect } from "react";
import { BiStar } from "react-icons/bi";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { mailAction } from "../store/index";

const Inbox = () => {
  const [fetchedMails, setFetchedMails] = useState([]);
  const email = localStorage.getItem("email"); //dheeroy00@gmail.com
  const cleanedEmail = email.replace(/[@.]/g, ""); //dheeroy00gmailcom
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    //getting data from fb
    const fetchMails = async () => {
      const response = await fetch(
        `https://c-bc82f-default-rtdb.firebaseio.com/${cleanedEmail}.json` //dheeroy00gmailcom getting data;
      );
      const loadedMails = [];
      const data = await response.json();
      for (const keys in data) {
        loadedMails.push({
          id: data[keys].id,
          subject: data[keys].subject,
          textarea: data[keys].textarea,
          time: data[keys].timeStamp,
          senderEmail: data[keys].senderEmail,
        });
      }
      dispatch(mailAction.totalMails(loadedMails));
      setFetchedMails(loadedMails);
    };
    fetchMails();
  }, [cleanedEmail]);

  const openMessage = (id) => {
    dispatch(mailAction.openMessage(fetchedMails));
    history.push(`/inbox/${id}`);
  };

  return (
    <div className="absolute top-20 left-[20rem] h-[90vh] w-[99rem]">
      <div className="space-y-1">
        {fetchedMails.map((mails, i) => (
          <div
            key={i}
            className="bg-[#f3f3f3] flex justify-between items-center p-2"
            onClick={() => openMessage(mails.id)}
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

export default Inbox;
