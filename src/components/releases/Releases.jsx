import React from "react";

function Releases({ title, date, info, heading }) {
  return (
    <div className="mt-[30px] w-full ">
      <div className="flex w-full mb-[50px] reative">
        <div
          className={
            title === "News"
              ? "w-[70%]  flex flex-col h-[80px] justify-between "
              : "w-[70%]  flex flex-col h-[60px] justify-between"
          }
        >
          {title === "News" ? <h1 className="text-[12px]  ">{date}</h1> : ""}

          <h1 className="text-[12px] font-semibold ">
            {title === "News" ? heading : date}
          </h1>
          <span className="text-[11px]">{info}</span>
        </div>
        <span className="text-[12px] relative w-[30%] text-end  top-[20px] underline underline-offset-[5px] cursor-pointer">
          READ MORE
        </span>
      </div>
      <hr className="  bg-black h-[0.2px] border-black" />
    </div>
  );
}

export default Releases;
