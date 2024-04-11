import React from "react";
import Socialicon from "../components/socialicon/Socialicon";
import { Socialiconlist } from "../data/Data";

const Social = () => {
  return (
    <div className="px-[50px] w-full  relative mb-[100px] max-lg:px-[20px]">
      <h1 className="text-[30px] font-semibold mb-[40px] max-sm:w-full max-sm:text-center ">
        Social
      </h1>

      <div className="flex w-full  h-[70%] items-end">
        {Socialiconlist.map((item) => (
          <Socialicon icon={item} key={item} />
        ))}
      </div>
    </div>
  );
};

export default Social;
