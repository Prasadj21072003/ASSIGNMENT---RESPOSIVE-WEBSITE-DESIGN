import React from "react";
import { footerlist } from "../data/Data";
const Footer = () => {
  return (
    <div className="w-full  ">
      <div className="w-full mb-[100px]">
        <hr />
      </div>
      <div className="w-full flex flex-wrap justify-evenly px-[100px] max-md:px-[50px] ">
        {footerlist.map((item) => (
          <div
            className="w-[100px]   mx-[10px] mb-[50px] max-lg:text-center   max-md:mx-[10px] "
            key={item?.title}
          >
            <div key={item?.title}>
              <h1 className="text-[15px] mb-[10px]">{item?.title}</h1>
            </div>
            <div className="w-full   ">
              {item.info.map((info) => (
                <div className="my-[10px] text-[12px] w-full   ">{info}</div>
              ))}
            </div>
          </div>
        ))}
        <div className="w-[200px] relative   leading-[22px] max-lg:text-center max-md:mx-[60px] max-lg:w-full">
          <div className="mb-[10px]">
            <i class="fa-brands fa-wix fa-2xl"></i>
          </div>
          <div className="w-full   ">
            <div className="my-[5px] text-[12px] w-full  ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
              soluta asperiores saepe, necessitatibus dolores quisquam voluptate
              sit facere sequi culpa autem dolor molestias debitis odit
              perferendis animi dolore et? Porro.
            </div>
            <div>
              <span className="text-[12px] mb-[10px] mt-[5px]">
                © 2006-2022 Wix.com, Inc
              </span>
              <div className="w-full flex justify-center ">
                <div className=" h-[20px] mt-[15px] w-[200px]  flex justify-between items-center  ">
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-youtube"></i>
                  <i class="fa-brands fa-pinterest-p"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-linkedin-in"></i>
                  <i class="fa-brands fa-tiktok"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
