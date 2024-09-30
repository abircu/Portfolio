import React from "react";
import { motion } from "framer-motion";
const DesignSkill = () => {
  return (
    <div className="w-full lg:w-1/2 ">
      <div className="py-12 font-titleFont flex flex-col gap-4 ">
        <p className="text-sm text-designColor uppercase tracking-[4px]">
          features
        </p>
        <h2 className="text-4xl font-bold">Design skill</h2>
      </div>
      <div className="mt-14 w-full lg:w-full  flex flex-col gap-6 ">
        <div className=" overflow-x-hidden">
          <p className="text-sm uppercase font-medium">Figma</p>
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
          <p className="text-sm uppercase font-medium">Sketch</p>
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
          <p className="text-sm uppercase font-medium">UI Design Principles</p>
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
          <p className="text-sm uppercase font-medium">Responsive Design</p>
          <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">100%</span>
            </motion.span>
          </span>
        </div>
        <div className=" overflow-x-hidden">
          <p className="text-sm uppercase font-medium">
            Design Systems & Component Libraries
          </p>
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
      </div>
    </div>
  );
};

export default DesignSkill;
