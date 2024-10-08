import React from "react";

const Title = ({ title, des }) => {
  return (
    <div className="flex flex-col font-titleFont gap-4">
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
        {title}
      </h3>
      <h1 className="text-5xl text-gray-300 font-bold uppercase">{des}</h1>
    </div>
  );
};

export default Title;
