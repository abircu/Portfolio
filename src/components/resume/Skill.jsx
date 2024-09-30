import React from "react";
import { motion } from "framer-motion";
import DesignSkill from "./DesignSkill";
import DevelopmentSkill from "./DevelopmentSkill";
const Skill = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col lg:flex-row justify-between gap-20"
    >
      <DesignSkill />
      {/*  */}
      <DevelopmentSkill />
    </motion.div>
  );
};

export default Skill;
