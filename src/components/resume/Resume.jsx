import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skill from "./Skill";
import Achivement from "./Achivement";
import Experience from "./Experience";

const Resume = () => {
  const [educationData, setEducatioData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setSetExperienceData] = useState(false);
  const [achivementData, setAchivementData] = useState(false);
  return (
    <section id="resume" className="w-full  py-20 border-b-[1px] border-black">
      <div className="flex justify-center items-center text-center">
        <Title title={"Years of experience"} des={"my rusume"} />
      </div>
      <div className="mt-10">
        <ul className="w-full grid grid-cols-2 md:grid-cols-2  lgl:grid-cols-4">
          <li
            onClick={() =>
              setEducatioData(true) &
              setSkillData(false) &
              setSetExperienceData(false) &
              setAchivementData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeIcon`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducatioData(false) &
              setSkillData(true) &
              setSetExperienceData(false) &
              setAchivementData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeIcon`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducatioData(false) &
              setSkillData(false) &
              setSetExperienceData(true) &
              setAchivementData(false)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeIcon`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducatioData(false) &
              setSkillData(false) &
              setSetExperienceData(false) &
              setAchivementData(true)
            }
            className={`${
              achivementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeIcon`}
          >
            Achivement
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skill />}
      {achivementData && <Achivement />}
      {experienceData && <Experience />}
    </section>
  );
};

export default Resume;
