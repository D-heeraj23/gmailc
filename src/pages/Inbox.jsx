import React, { useEffect } from "react";
import { BiStar } from "react-icons/bi";
import { useState } from "react";

const dummy = [
  {
    nameOfSender: "test 1",
    message:
      "ok i thinks  jdod osme kinfd of stupid message of diifferent soize",
    time: "19:60",
  },
  {
    nameOfSender: "manish ",
    message: "ok now what my speed of typing is very slow",
    time: "0:20",
  },
  {
    nameOfSender: "dheeraj sharama",
    message: "ok now its not giving any error ",
    time: "9:30",
  },
  {
    nameOfSender: "hl sharma",
    message: "sending yhe gstr report online fill",
    time: "19:60",
  },
];

const Inbox = () => {
  const [fetchedMails, setFetchedMails] = useState([]);
  const email = localStorage.getItem("email");
  const cleanedEmail = email.replace(/[@.]/g, "");
  console.log(cleanedEmail);

  useEffect(() => {
    const fetchMails = async () => {
      const response = await fetch(
        `https://c-bc82f-default-rtdb.firebaseio.com/${cleanedEmail}.json`
      );
      const loadedMails = [];
      const data = await response.json();
      console.log(data, "data");
      for (const keys in data) {
        loadedMails.push({
          subject: data[keys].subject,
          textarea: data[keys].textarea,
        });
      }
      setFetchedMails(loadedMails);
    };
    fetchMails();
  }, []);
  console.log(fetchedMails, "checking fetched mails");
  return (
    <div className="bg-[#f5f5f5] absolute top-20 left-[20rem] h-screen w-[85rem]">
      <div className="space-y-1">
        {fetchedMails.map((mails, i) => (
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

export default Inbox;
