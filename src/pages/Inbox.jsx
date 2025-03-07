import React, { useEffect } from "react";
import { BiStar } from "react-icons/bi";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { mailAction } from "../store/index";
import { MdDeleteOutline } from "react-icons/md";

const Inbox = () => {
  const [fetchedMails, setFetchedMails] = useState([]);
  const email = localStorage.getItem("email"); //dheeroy00@gmail.com
  const cleanedEmail = email.replace(/[@.]/g, ""); //dheeroy00gmailcom
  const history = useHistory();
  const dispatch = useDispatch();
  const [reRender, setReRender] = useState(true);

  useEffect(() => {
    const fetchMails = async () => {
      const response = await fetch(
        `https://c-bc82f-default-rtdb.firebaseio.com/${cleanedEmail}.json` //dheeroy00gmailcom getting data;
      );
      const loadedMails = [];
      const data = await response.json();
      for (const keys in data) {
        loadedMails.push({
          fbId: keys,
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

    fetchMails(); // Initial fetch

    const interval = setInterval(() => {
      fetchMails();
    }, 2000); // Fetch every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [cleanedEmail, dispatch, reRender]);

  const openMessage = (id) => {
    dispatch(mailAction.openMessage(fetchedMails));
    history.push(`/inbox/${id}`);
  };

  const deleteHandler = async (id) => {
    try {
      await fetch(
        `https://c-bc82f-default-rtdb.firebaseio.com/${cleanedEmail}/${id}/.json`,
        {
          method: "DELETE",
        }
      );
    } catch (error) {
      console.log("error");
    } finally {
      setReRender((prev) => !prev);
    }
  };

  return (
    <>
      {fetchedMails.length === 0 ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/no-message-8580734-6763390.png?f=webp"
            alt="no mails"
          />
        </div>
      ) : (
        ""
      )}
      <div className="absolute top-20 left-[20rem] h-[90vh] w-[99rem]">
        <div className="space-y-1">
          {fetchedMails.map((mails) => (
            <div
              key={mails.fbId}
              className="bg-[#f3f3f3] flex justify-between items-center p-2 hover:cursor-pointer"
            >
              <div className="flex gap-5 items-center text-2xl">
                <button>
                  <span>
                    <BiStar />
                  </span>
                </button>
              </div>
              <div
                className=" w-[15rem] text-lg font-bold"
                onClick={() => openMessage(mails.id)}
              >
                {mails.subject}
              </div>
              <div className=" w-[60rem] font-bold">{mails.textarea}</div>
              <div className=" w-[6rem] font-semibold">{mails.time}</div>
              <div className="p-2 text-3xl hover:text-red-400">
                <MdDeleteOutline onClick={() => deleteHandler(mails.fbId)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Inbox;
