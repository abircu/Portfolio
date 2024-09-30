import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { teacter1 } from "../../assets/index";
import { Link } from "react-scroll";
const footer = () => {
  return (
    <div className="w-full pt-10 h-auto  flex md:flex-row flex-col  gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32 h-32 rounded-full" src={teacter1} alt="logo" />
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://github.com/abircu">
              <FaGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/md-sohel-rana-835498205/">
              <FaLinkedinIn />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://wa.link/mc6v8d">
              <FaWhatsapp />
            </a>
          </span>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              Home
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              About
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li>

          <li>
            <Link
              to="features"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              Feature
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              Contact
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          contact
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <div className="flex gap-2 ">
            <h3 className="font-medium text-lightText text-sm">
              Present Adress:
            </h3>
            <p className="text-sm  text-lightText">
              House-11, Road-16, nikunja-02 <br />
              khilkhet, Dhaka
            </p>
          </div>
          <div className="flex gap-2">
            <h3 className="font-medium text-lightText text-sm">
              Parmanent Adress:
            </h3>
            <p className="text-xs md:text-sm  text-lightText">
              Rangamatia, fulbaria, <br /> mymensigh
            </p>
          </div>
          <div className="flex gap-2 ">
            <h3 className="font-medium text-lightText text-sm">Mobail:</h3>
            <p className="text-xs md:text-sm  text-lightText">
              +880 1301854873
            </p>
          </div>
          <div className="flex gap-2 ">
            <h3 className="font-medium text-lightText text-sm">Email:</h3>
            <p className="text-xs md:text-sm  text-lightText">
              mdabircse4873@gmail.com
            </p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default footer;
