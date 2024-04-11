import React from "react";

const Card = ({ img, heading, info }) => {
  return (
    <div className=" w-[30%] h-[500px] relative max-lg:w-[80%] max-lg:mb-[100px]">
      <div className="h-[60%]">
        <img src={img} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="h-[40%]  relative max-lg:text-center max-sm:h-[45%]">
        <h1 className="absolute top-[40px] font-bold  max-lg:w-full ">
          {heading}
        </h1>
        <p className="absolute bottom-[20px] text-[12px] w-[90%] max-lg:w-full leading-[20px] ">
          {info}
        </p>
      </div>
    </div>
  );
};

export default Card;
