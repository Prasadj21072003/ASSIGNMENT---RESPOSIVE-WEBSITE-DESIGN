import React from "react";
import Releases from "../components/releases/Releases";
import { Newslist } from "../data/Data";

const Inthenews = () => {
  return (
    <div className="mb-[130px]  w-full" id="inthenews">
      <div className="px-[50px] max-lg:px-[20px]">
        <div className=" flex w-[25%]  items-center justify-between max-lg:w-full ">
          <h1 className="text-[30px] font-semibold">In The News</h1>
          <span className="relative top-[5px] underline underline-offset-[5px] cursor-pointer">
            View All
          </span>
        </div>
        <div className="mt-[90px]">
          {Newslist.map((item) => (
            <Releases
              title={item?.title}
              heading={item?.heading}
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

export default Inthenews;
