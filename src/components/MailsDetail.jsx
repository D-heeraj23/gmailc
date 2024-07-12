import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { BiArchive } from "react-icons/bi";
import { RiSpam2Fill } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
const MailsDetail = () => {
  return (
    <div className="fixed h-[50rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[80rem] shadow-2xl bg-white p-7 rounded-xl">
      <div className="flex gap-7 text-[30px]">
        <BiArrowBack />
        <BiArchive />
        <RiSpam2Fill />
        <MdDeleteOutline />
      </div>
      <div className="mt-10 font-semibold text-4xl">some kind of subject</div>
      <div className="mt-7 flex justify-between font-semibold border-b">
        <div className="text-2xl">rishabh123@gmail.com</div>
        <div className="text-zinc-400">18:52</div>
      </div>
      <div className="flex items-center justify-center flex-col mt-20 p-20">
        <div className="text-2xl text-left w-full">
          Subject: some kind of subject again
        </div>
        <div className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa porro,
          praesentium iste dolores accusamus tenetur illum dolorem quod
          asperiores, laboriosam doloremque in. Expedita, blanditiis modi harum
          hic, consequuntur quam in quisquam error magni ab libero fuga
          doloremque incidunt voluptatem illo quod necessitatibus quibusdam non
          fugiat tempora? Adipisci est doloribus temporibus?
        </div>
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
