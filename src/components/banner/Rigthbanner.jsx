import React from "react";
import { bannerImg, removebg } from "../../assets/index";

const Rigthbanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
        src={removebg}
        alt="bannerImg"
      />
      <div className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center font-titleFont "></div>
    </div>
  );
};

export default Rigthbanner;
