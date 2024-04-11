import React from "react";
import Home from "./pages/Home.jsx";
import Footer from "./Sections/Footer.jsx";

const App = () => {
  return (
    <div className="relative">
      <div className="py-[70px] px-[100px]  max-md:px-[20px] ">
        <Home />
      </div>
      <div className="absolute w-full pb-[70px] ">
        <Footer />
      </div>
    </div>
  );
};

export default App;
