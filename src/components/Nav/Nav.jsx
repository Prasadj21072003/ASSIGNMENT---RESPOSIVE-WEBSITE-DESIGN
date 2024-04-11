import React, { useState } from "react";

const Nav = () => {
  const [navon, setnavon] = useState(0);
  return (
    <div className="w-full h-[70px] ">
      <hr className="  bg-black h-[0.2px] border-black" />

      <nav className="w-[40%]  h-full max-lg:w-full">
        <ul className=" flex items-center justify-between h-full">
          <li
            key="Pressroom"
            onClick={() => {
              setnavon(0);
            }}
            className="cursor-pointer "
          >
            <a
              href="#pressroom"
              className={navon === 0 ? " text-blue-500  " : ""}
            >
              Press Room
            </a>
          </li>
          <span>|</span>
          <li
            key="Pressrelease"
            onClick={() => {
              setnavon(1);
            }}
            className=" hover:text-black cursor-pointer"
          >
            <a
              href="#pressrelease"
              className={navon === 1 ? " text-blue-500  " : ""}
            >
              Press Release
            </a>
          </li>
          <span>|</span>

          <li
            key="inthenews"
            onClick={() => {
              setnavon(2);
            }}
            className=" hover:text-black cursor-pointer"
          >
            <a
              href="#inthenews"
              className={navon === 2 ? " text-blue-500  " : ""}
            >
              In The News
            </a>
          </li>
        </ul>
      </nav>
      <hr className="  bg-black h-[0.2px] border-black" />
    </div>
  );
};

export default Nav;
