import React from "react";
import Nav from "../components/Nav/Nav";
import Carousal from "../components/Carousal/Carousal";

const Pressroom = () => {
  return (
    <div className="mb-[80px]  w-full " id="pressroom">
      <div className="px-[50px] max-lg:px-[20px]">
        <div className="w-full mb-[40px]  max-lg:text-center">
          <h1 className="text-[61px] font-semibold max-sm:text-[40px] max-sm:mb-[10px]">
            Press Room
          </h1>
          <span className="relative left-[2px] bottom-[5px]">
            All the News You Need to Know about Wix
          </span>
        </div>
        <Nav />
        <div className="w-[90%] mt-[40px] max-lg:text-center max-lg:w-full ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, fuga
            eos! Cum, at consectetur eius atque quae veritatis, mollitia quas
            magni sed fuga, nam dolore laborum ducimus sint architecto
            inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Autem, fuga eos! Cum, at consectetur eius atque quae veritatis,
            mollitia quas magni sed fuga, nam dolore laborum ducimus sint
            architecto inventore. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Autem, fuga eos! Cum, at consectetur eius atque
            quae veritatis,
          </p>
        </div>
      </div>
      <div className="h-[400px] w-full  mt-[40px] mb-[40px]  flex justify-center">
        <Carousal />
      </div>
    </div>
  );
};

export default Pressroom;
