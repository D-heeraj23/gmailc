import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { BiArchive } from "react-icons/bi";
import { RiSpam2Fill } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const MailsDetail = () => {
  const history = useHistory();
  const { id } = useParams();
  const selectedMail = useSelector((state) => state.mail.selectMessage);
  const mail = selectedMail.find((mails) => mails.id === id);

  return (
    <div className="absolute top-20 left-[20rem] h-[90vh] w-[99rem] p-10">
      <div className="flex gap-7 text-[30px]">
        <BiArrowBack onClick={() => history.push("/inbox")} />
        <BiArchive />
        <RiSpam2Fill />
        <MdDeleteOutline />
      </div>

      <div className="mt-10 font-semibold text-4xl">{mail.subject}</div>
      <div className="mt-7 flex justify-between font-semibold border-b">
        <div className="text-2xl">{mail.senderEmail}</div>
        <div className="text-zinc-400">{mail.timeStamp}</div>
      </div>
      <div className="flex items-center justify-center flex-col mt-20 p-20">
        <div className="text-2xl text-left w-full">Subject: {mail.subject}</div>
        <div className="text-xl text-left w-full">{mail.textarea}</div>
      </div>
      <div className="mt-32 flex gap-5">
        <button className="p-4 w-36 rounded-full text-xl border hover:bg-slate-200">
          reply
        </button>
        <button className="p-4 w-36 rounded-full text-xl border hover:bg-slate-200">
          forword
        </button>
      </div>
    </div>
  );
};

export default MailsDetail;
