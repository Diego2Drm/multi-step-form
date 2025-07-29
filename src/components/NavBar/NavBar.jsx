import React from "react";
import { steps } from "../../utils/data";

const NavBar = () => {
  return (
    <ul className="flex justify-center gap-5 pt-5 navList-desktop">
      {
        steps.map((step, i) => (
          <li key={i} className="md:flex items-center  gap-3">
            <div className="text-white border-2 border-white rounded-full
              w-8 h-8 flex justify-center items-center nth-[1]:bg-Blue-200 nth-[1]:text-black
              ">
              {step.step}
            </div>
            <div className="">
              <p className="text-xs text-Grey-500 font-Ubuntu-Medium uppercase hidden md:flex">{step.titleStep}</p>
              <p className="text-white uppercase font-Ubuntu-Medium hidden md:flex">{step.info}</p>
            </div>
          </li>
        ))
      }
    </ul>
  )
};

export { NavBar };