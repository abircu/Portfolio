import React from "react";
import { Link } from "react-scroll";
import { teacter1 } from "../../assets/index";
import { navLinksdata } from "../../constants";
const Navbar = () => {
  return (
    <div className="w-full h-24 mx-auto sticky top-0 bg-bodyColor z-50 flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 ">
      <div className="flex items-center gap-2">
        <img className="w-16 h-16 rounded-full" src={teacter1} alt="" />
        <p className="uppercase">Sohel</p>
      </div>
      <div>
        <ul className="flex items-center gap-6 lg:gap-10 ">
          {navLinksdata.map((navlink) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={navlink._id}
            >
              <Link
                activeClass="active"
                to={navlink.Link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {navlink.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
