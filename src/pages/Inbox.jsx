import React from "react";
import { BiStar } from "react-icons/bi";

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
  {
    nameOfSender: "somekjsdk",
    message:
      "lokajsoij foijafjsd fjsdfjadjf lskajf ajflakjfioafjwejfosjflkasjfisaf js fjf slkjdf alsjf sjf lsjak flajksf ljsaf lajsf j ksjf aksjf lakjsf skljd fklsjdf lsakjf l;askjf laksjf lsakjfd lsdkjf lksdjf laskjf ;lsakjf las;kjf las;kfj lsakjf l;j",
    time: "54:56",
  },
];

const Inbox = () => {
  return (
    <div className="bg-[#f5f5f5] absolute top-20 left-[20rem] h-screen w-[85rem]">
      <div className="space-y-1">
        {dummy.map((mails, i) => (
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
            <div className=" w-[15rem] text-lg font-bold">
              {mails.nameOfSender}
            </div>
            <div className=" w-[60rem] font-bold">{mails.message}</div>
            <div className=" w-[6rem] font-semibold">{mails.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inbox;
