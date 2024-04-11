import React, { useState } from "react";
import { Imglist } from "../../data/Data";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";

const Carousal = () => {
  const [cur, setcur] = useState(0);
  return (
    <div className=" w-[95%] h-[100%] overflow-hidden  max-sm:pt-[50px]  ">
      <div className="w-[100%] max-h-[90%] overflow-hidden ">
        <div
          className="w-[100%] max-h-[90%]  flex  transition ease-out    duration-500"
          style={{ transform: `translateX(-${cur * 100}%)` }}
        >
          <img src={image2} alt="" className="w-full h-[100%]  " />
          <img src={image1} alt="" className="w-full h-[100%]  " />
          <img src={image3} alt="" className="w-full h-[100%]  " />
          <img src={image4} alt="" className="w-full h-[100%]  " />
          <img src={image5} alt="" className="w-full h-[100%]  " />
        </div>
      </div>
      <div className="flex justify-center items-center  h-[40px]  ">
        <div className="flex  w-[120px] h-[20px]  justify-evenly items-center  borde-[4px]">
          {Imglist?.map((_, i) => {
            return (
              <div
                onClick={() => {
                  setcur(i);
                }}
                className={
                  cur === i
                    ? "h-[8px] w-[8px] rounded-full  cursor-pointer border-[2px]  bg-white border-gray-400"
                    : "h-[8px] w-[8px] rounded-full bg-gray-400 cursor-pointer border-[2px]"
                }
                key={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousal;
