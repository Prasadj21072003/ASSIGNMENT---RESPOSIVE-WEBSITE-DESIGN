import React from "react";

const Contactus = () => {
  return (
    <div className="flex w-full mb-[100px] max-sm:flex-col  px-[50px] max-lg:px-[20px]">
      <div className="w-[50%]  max-sm:w-full max-sm:text-center">
        <h1 className="text-[30px] font-semibold mb-[40px]">Contact Us</h1>
      </div>
      <div className="w-[50%]   pr-[50px] pt-[10px] max-sm:pr-[0px] max-sm:w-full max-sm:text-center">
        <span className=" text-[13px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          molestiae, vero commodi perferendis laboriosam alias? Fuga, officiis
          quos ratione error corporis veritatis eveniet, vero, qui architecto
          aliquam facere. Ducimus, accusantium!
        </span>
        <div>
          <form action="" method="post">
            <div className="flex w-full justify-between mt-[50px]">
              <input
                type="text"
                name="fname"
                id=""
                placeholder="First Name"
                className="border-b border-black w-[45%] focus:outline-none placeholder:text-[12px] placeholder:text-black placeholder:pl-[10px] placeholder:relative placeholder:bottom-[6px]"
              />
              <input
                type="text"
                name="phone"
                id=""
                placeholder="Phone"
                className=" border-b border-black w-[45%] focus:outline-none placeholder:text-[12px] placeholder:text-black placeholder:pl-[10px] placeholder:relative placeholder:bottom-[6px]"
              />
            </div>
            <input
              type="text"
              name="email"
              id=""
              placeholder="Email"
              className=" border-b  border-black mt-[50px] w-[100%] focus:outline-none placeholder:text-[12px] placeholder:text-black placeholder:pl-[10px] placeholder:relative placeholder:bottom-[6px]"
            />
            <textarea
              name="message"
              id=""
              placeholder="Type your message here..."
              cols="30"
              rows="8"
              className=" border border-black mt-[50px] w-[100%] placeholder:text-[12px] placeholder:text-gray-400 placeholder:pl-[10px] placeholder:pt-[10px]"
            />
            <button
              type="submit"
              className="border border-black mt-[50px] text-[15px] px-[35px] py-[3px] rounded-2xl cursor-pointer   "
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
