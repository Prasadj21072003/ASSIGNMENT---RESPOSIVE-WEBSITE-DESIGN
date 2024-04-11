import React from "react";
import Pressroom from "../Sections/Pressroom";
import Pressrelease from "../Sections/Pressrelease";
import Inthenews from "../Sections/Inthenews";
import Info from "../Sections/Info";
import Social from "../Sections/Social";
import Contactus from "../Sections/Contactus";
import Footer from "../Sections/Footer";

const Home = () => {
  return (
    <div className="w-full    ">
      <Pressroom />
      <Pressrelease />
      <Inthenews />
      <Info />
      <Social />
      <Contactus />
    </div>
  );
};

export default Home;
