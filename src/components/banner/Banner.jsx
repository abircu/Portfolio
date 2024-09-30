import React from "react";
import LeftBanner from "./LeftBanner";
import Rigthbanner from "./Rigthbanner";
const Banner = () => {
  return (
    <section
      id="home"
      className="w-full  pt-10 flex flex-col lg:flex-row items-center pb-20  border-b-[1px] font-titleFont border-b-black"
    >
      <LeftBanner />
      <Rigthbanner />
    </section>
  );
};

export default Banner;
