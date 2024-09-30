import React from "react";
import { HiArrowRight } from "react-icons/hi";
const Card = ({ title, des, icon }) => {
  return (
    <div className=" w-full h-full px-2 lgl:px-12 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group p-2 md:p-3 lgl:p-4 mb-4 ">
      <div className="h-full overflow-y-hidden ">
        <div className="flex flex-col gap-6 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
          <div>
            <span className="text-5xl text-designColor">{icon}</span>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-titleFont text-gray-300">{title}</h1>
            <p className="text-base">{des}</p>
            <span className="text-2xl text-designColor">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
