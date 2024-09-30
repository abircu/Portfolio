import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { MdDevices } from "react-icons/md";
import { FiLayers } from "react-icons/fi";
import { FaSyncAlt, FaGithub } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { RiSpeedLine } from "react-icons/ri";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20   border-b-[1px] border-b-black"
    >
      <Title title={"features"} des={"what i do"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-20 md:gap-10 gap-6 mt-10">
        <Card
          title={" Responsive Web Design"}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt maiores labore iste. Id tenetur ea eligendi necessitatibus doloremque?!"
          }
          icon={<MdDevices />}
        />
        <Card
          title={"Component-Based Architecture"}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt maiores labore iste. Id tenetur ea eligendi necessitatibus doloremque?!"
          }
          icon={<FiLayers />}
        />
        <Card
          title={"State Managemen"}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt maiores labore iste. Id tenetur ea eligendi necessitatibus doloremque?!"
          }
          icon={<FaSyncAlt />}
        />
        <Card
          title={"API Integration"}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt maiores labore iste. Id tenetur ea eligendi necessitatibus doloremque?!"
          }
          icon={<AiOutlineApi />}
        />
        <Card
          title={"Performance Optimization"}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt maiores labore iste. Id tenetur ea eligendi necessitatibus doloremque?!"
          }
          icon={<RiSpeedLine />}
        />
        <Card
          title={"Version Control & Collaboration"}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt maiores labore iste. Id tenetur ea eligendi necessitatibus doloremque?!"
          }
          icon={<FaGithub />}
        />
      </div>
    </section>
  );
};

export default Features;
