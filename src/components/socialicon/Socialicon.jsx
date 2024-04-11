import React from "react";

function Socialicon({ icon }) {
  return (
    <div className="w-[20%] h-[160px] max-sm:h-[100px] border flex items-center justify-center border-black">
      {icon}
    </div>
  );
}

export default Socialicon;
