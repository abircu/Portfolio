import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col md:flex-col lg:flex-row justify-between gap-20"
    >
      <div className="w-full lg:w-1/2 ">
        <div className="py-12 font-titleFont ">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-14 w-full lg:w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 ">
          <ResumeCard
            title={"BSc in Computer Science & Engineering-CSE"}
            subTitle={"City University (2020 - 2024)"}
            result={"3.06/4"}
            des={
              "I hold a BSc in CSE, major in Software Engineering from City University, focusing on software development and system design"
            }
          />
          <ResumeCard
            title={"Higher Secondary Certificate-HSC (Science)"}
            subTitle={"Keshorgonj Degree College (2017 - 2019)"}
            result={"4.42/5"}
            des={
              "I completed my Higher Secondary Certificate - HSC in group Science from Keshorgonj Degree College."
            }
          />
          <ResumeCard
            title={"Secondary School Certificate-SSC (Science)"}
            subTitle={"Rangamatia High School (2012- 2017)"}
            result={"4.82/5"}
            des={
              "I completed my  Secondary School Certificate - SSC in group Science from Rangamatia High School ."
            }
          />
        </div>
      </div>
      {/*  */}
      <div className="w-full lg:w-1/2">
        <div className="py-12 font-titleFont ">
          <p className="text-sm text-designColor tracking-[4px]">
            2024 - Present
          </p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full lg:w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 ">
          <ResumeCard
            title={"Junior Frontend Developer"}
            subTitle={"Digonto Soft (Jul 2024 - Present)"}
            result={"ongoing"}
            des={
              "Developing and optimizing user interfaces using React, collaborating with cross-functional teams to enhance application performance and user experience."
            }
          />
          <ResumeCard
            title={"Intern frontend Developer (React)"}
            subTitle={"Digonto Soft Feb-2024 to Jul-2024)"}
            result={"6 month"}
            des={
              "Focused on developing responsive web applications using React, collaborating with design and backend teams"
            }
          />
          <ResumeCard
            title={"Web Development with Modern Tools"}
            subTitle={"Self-paced (Ongoing)"}
            result={"React"}
            des={
              "Building expertise in front-end technologies, including responsive design, JavaScript frameworks, state management with Redux and Context API, API integration with Axios, and Firebase for authentication and real-time data."
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
