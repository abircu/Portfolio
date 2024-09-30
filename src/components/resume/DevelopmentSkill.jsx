import React from "react";
import { motion } from "framer-motion";
const DevelopmentSkill = () => {
  return (
    <div className="w-full lg:w-1/2 ">
      <div className="py-12 flex flex-col gap-4 font-titleFont ">
        <p className="text-sm text-designColor tracking-[4px] uppercase">
          features
        </p>
        <h2 className="text-4xl font-bold">Development skill</h2>
      </div>
      <div className="mt-14 w-full lg:w-full  flex flex-col gap-6 ">
        <div className=" overflow-x-hidden">
          <p className="text-sm uppercase font-medium">React</p>
          <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">100%</span>
            </motion.span>
          </span>
        </div>
        <div className=" overflow-x-hidden">
          <p className="text-sm uppercase font-medium">JavaScript</p>
          <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">90%</span>
            </motion.span>
          </span>
        </div>
        <div className=" overflow-x-hidden">
          <p className="text-sm uppercase font-medium">Html</p>
          <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">100%</span>
            </motion.span>
          </span>
        </div>
        <div className=" overflow-x-hidden">
          <p className="text-sm uppercase font-medium">Css3 & Tailwind css</p>
          <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">80%</span>
            </motion.span>
          </span>
        </div>
        <div className=" overflow-x-hidden">
          <p className="text-sm uppercase font-medium">Context Api</p>
          <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">70%</span>
            </motion.span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentSkill;
