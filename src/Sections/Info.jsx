import React from "react";
import Card from "../components/Card/Card";
import { Cardlist } from "../data/Data";

const Info = () => {
  return (
    <div className="px-[50px] mb-[100px] max-lg:px-[20px]">
      <div className=" flex items-center justify-between max-lg:flex-col  ">
        {Cardlist.map((item) => (
          <Card
            img={item?.img}
            heading={item?.title}
            info={item?.info}
            key={item?.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Info;
