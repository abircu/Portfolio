import React from "react";
import { bannerImg, removebg } from "../../assets/index";

const Rigthbanner = () => {
  return (
    <div className=" w-full lg:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[500px] h-[680px] z-10"
        src={removebg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-none flex justify-center items-center"></div>
    </div>
  );
};

export default Rigthbanner;
