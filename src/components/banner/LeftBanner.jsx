import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiJavascript, SiReact } from "react-icons/si";
const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["professional Coder.", "Frontend Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" uppercase text-lg font-normal">Welcome to my world</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I,am <span className="uppercase text-designColor ">Sohel</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p>
          Passionate front-end developer with hands-on experience as a React
          developer during an internship at Digonto Soft. Equipped with a solid
          understanding of web development principles and a strong foundation in
          JavaScript, HTML,CSS, Tailwind CSS and React JS. Adept at creating
          responsive and user-friendly interfaces.
        </p>
      </div>
      <div className="flex flex-col  md:flex-row justify-between">
        <div>
          {" "}
          <h1 className="text-base uppercase font-titleFont mb-4">find me</h1>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div className="pt-4 lg:pt-0">
          <h1 className="text-base uppercase font-titleFont mb-4">
            best skill on
          </h1>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiReact />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
