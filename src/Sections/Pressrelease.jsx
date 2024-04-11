import React from "react";
import Releases from "../components/releases/Releases";
import { Releaseslist } from "../data/Data";

const Pressrelease = () => {
  return (
    <div className="mb-[100px]  w-full " id="pressrelease">
      <div className="px-[50px] max-lg:px-[20px]">
        <div className=" flex w-[25%]  items-center justify-between  max-lg:w-full ">
          <h1 className="text-[30px] font-semibold ">Press Releases</h1>
          <span className="relative top-[5px] underline underline-offset-[5px] cursor-pointer">
            View All
          </span>
        </div>
        <div className="mt-[90px] mb-[40px]">
          {Releaseslist.map((item) => (
            <Releases
              title={item?.title}
              date={item?.date}
              info={item?.info}
              key={item?.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pressrelease;
