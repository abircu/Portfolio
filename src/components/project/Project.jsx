import React from "react";
import Title from "../layouts/Title";
import ProjectCard from "./ProjectCard";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
const Project = () => {
  return (
    <section
      id="project"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title={"Visit my portfolio and keep your feedback"}
          des={"My project"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 lg:gap-14 mt-10">
        <ProjectCard
          title={"social media clone"}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt maiores labore iste. Id tenetur ea eligendi necessitatibus doloremque?!"
          }
          src={projectOne}
        />
        <ProjectCard
          title={"social media clone"}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt maiores labore iste. Id tenetur ea eligendi necessitatibus doloremque?!"
          }
          src={projectTwo}
        />
        <ProjectCard
          title={"social media clone"}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt maiores labore iste. Id tenetur ea eligendi necessitatibus doloremque?!"
          }
          src={projectThree}
        />
        <ProjectCard
          title={"social media clone"}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt maiores labore iste. Id tenetur ea eligendi necessitatibus doloremque?!"
          }
          src={projectOne}
        />
        <ProjectCard
          title={"social media clone"}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt maiores labore iste. Id tenetur ea eligendi necessitatibus doloremque?!"
          }
          src={projectTwo}
        />
        <ProjectCard
          title={"social media clone"}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt maiores labore iste. Id tenetur ea eligendi necessitatibus doloremque?!"
          }
          src={projectThree}
        />
      </div>
    </section>
  );
};

export default Project;
