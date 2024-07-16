import React, { useEffect } from "react";
import { BiStar } from "react-icons/bi";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { mailAction } from "../store/index";
import { PropagateLoader } from "react-spinners";
import { MdDeleteOutline } from "react-icons/md";
import { BiArchive } from "react-icons/bi";
import { RiSpam2Fill } from "react-icons/ri";

const Inbox = () => {
  const [fetchedMails, setFetchedMails] = useState([]);
  const [checkedBoxes, setCheckedBoxes] = useState({});
  const [loading, setLoading] = useState(false);
  const email = localStorage.getItem("email"); //dheeroy00@gmail.com
  const cleanedEmail = email.replace(/[@.]/g, ""); //dheeroy00gmailcom
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    //getting data from fb
    const fetchMails = async () => {
      setLoading(true);
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
      setLoading(false);
    };
    fetchMails();
  }, [cleanedEmail, dispatch]);

  const openMessage = (id) => {
    dispatch(mailAction.openMessage(fetchedMails));
    history.push(`/inbox/${id}`);
  };

  const handleCheckboxChange = (id) => {
    setCheckedBoxes((prevCheckedBoxes) => ({
      ...prevCheckedBoxes,
      [id]: !prevCheckedBoxes[id],
    }));
  };

  const deleteHandler = async () => {
    const selectedMails = Object.keys(checkedBoxes).filter(
      (id) => checkedBoxes[id]
    );

    if (selectedMails.length === 0) {
      return;
    }

    setLoading(true);

    for (const id of selectedMails) {
      await fetch(
        `https://c-bc82f-default-rtdb.firebaseio.com/${cleanedEmail}/${id}.json`,
        {
          method: "DELETE",
        }
      );
    }

    const remainingMails = fetchedMails.filter(
      (mail) => !selectedMails.includes(mail.id)
    );

    dispatch(mailAction.totalMails(remainingMails));
    setFetchedMails(remainingMails);
    setCheckedBoxes({});
    setLoading(false);
  };

  const areAnyChecked = Object.values(checkedBoxes).some(
    (isChecked) => isChecked
  );

  return (
    <>
      {!loading && fetchedMails.length === 0 ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/no-message-8580734-6763390.png?f=webp"
            alt="no mails"
          />
        </div>
      ) : (
        ""
      )}
      {loading ? (
        <div className="absolute top-1/2 left-1/2">
          <PropagateLoader />
        </div>
      ) : (
        <div className="absolute top-20 left-[20rem] h-[90vh] w-[99rem]">
          {areAnyChecked && (
            <div className=" text-3xl m-4 p-4 flex items-center gap-4 text-zinc-600 hover:cursor-pointer">
              <MdDeleteOutline onClick={deleteHandler} />
              <BiArchive />
              <RiSpam2Fill />
            </div>
          )}

          <div className="space-y-1">
            {fetchedMails.map((mails) => (
              <div
                key={mails.id}
                className="bg-[#f3f3f3] flex justify-between items-center p-2"
              >
                <div className="flex gap-5 items-center text-2xl">
                  <button>
                    <span>
                      <BiStar />
                    </span>
                  </button>
                  <input
                    type="checkbox"
                    className="size-5"
                    checked={checkedBoxes[mails.id] || false}
                    onChange={() => handleCheckboxChange(mails.id)}
                  />
                </div>
                <div
                  className=" w-[15rem] text-lg font-bold"
                  onClick={() => openMessage(mails.id)}
                >
                  {mails.subject}
                </div>
                <div className=" w-[60rem] font-bold">{mails.textarea}</div>
                <div className=" w-[6rem] font-semibold">{mails.time}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Inbox;
