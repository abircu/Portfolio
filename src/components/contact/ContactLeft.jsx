import React from "react";
import { contactImg } from "../../assets/index";
import { FaWhatsapp, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
const ContactLeft = () => {
  return (
    <div className="w-[35%]  h-full bg-gradient-to-r from-[#1e2024] to-[#23272b]  p-8 rounded-lg shadow-shadowOne flex flex-col gap-6 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4 ">
        <h3 className="text-3xl font-bold text-white">Sohel Rana</h3>
        <p className="text-lg font-normal text-gray-400">Frontend Developer</p>
        <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
          obcaecati soluta, nisi ex facilis ab aperiam .
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+880 1301854873</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+880 1610263373</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:
          <span className="text-lightText">mdabircse4873@gmail.com</span>
        </p>
      </div>
      <div className="mt-2 flex flex-col gap-4">
        <h2 className="uppercase ">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaWhatsapp />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
