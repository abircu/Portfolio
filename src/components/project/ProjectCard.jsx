import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectCard = ({ title, des, src }) => {
  return (
    <div className="w-full px-4 md:px-8 lgl:px-12 h-auto py-10 pb-10 rounded-lg shadow-shadowOne flex flex-col gap-6 bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt=""
        />
      </div>
      <div className="w-full  flex justify-between items-center">
        <div>
          <h3 className="uppercase ">{title}</h3>
        </div>
        <div className="flex gap-2">
          <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
            {" "}
            <a href="https://github.com/abircu/Akij-Ibos">
              <BsGithub />
            </a>
          </span>
          <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
            {" "}
            <a href="https://bejewelled-cassata-ee8e02.netlify.app">
              {" "}
              <FaGlobe />
            </a>
          </span>
        </div>
      </div>
      <div>
        <p className="text-sm tracking-wide  hover:text-gray-100 duration-300">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
