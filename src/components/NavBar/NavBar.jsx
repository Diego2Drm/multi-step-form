import React from "react";
import { steps } from "../../utils/data";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="flex justify-center gap-5 pt-5 navList-desktop">
      {
        steps.map((step, i) => (
          <NavLink to={step.to} key={i}
            className={({ isActive }) => `md:flex items-center gap-3
                ${isActive ? "" : "pointer-events-none"}`}
          >
            {({ isActive }) => (
              <>
                <div
                  className={`${isActive ? "bg-blue-200 text-black" : "text-white border-2 border-white"
                    } rounded-full w-8 h-8 flex justify-center items-center`}
                >
                  {step.step}
                </div>
                <div>
                  <p className="text-xs text-Grey-500 font-Ubuntu-Medium uppercase hidden md:flex">
                    {step.titleStep}
                  </p>
                  <p className="text-white uppercase font-Ubuntu-Medium hidden md:flex">
                    {step.info}
                  </p>
                </div>
              </>
            )}
          </NavLink>
        ))
      }

    </ul >
  )
};

export { NavBar };

{/* <NavLink to={step.to} key={i}
  className={({ isActive }) => `md:flex items-center gap-3
${isActive ? "bg-Blue-950" : "bg-red-500 pointer-events-none"}
`}
>
  <div className="text-white border-2 border-white rounded-full
    w-8 h-8 flex justify-center items-center nth-[1]:bg-Blue-200 nth-[1]:text-black
    ">
    {step.step}
  </div>
  <div className="">
    <p className="text-xs text-Grey-500 font-Ubuntu-Medium uppercase hidden md:flex">{step.titleStep}</p>
    <p className="text-white uppercase font-Ubuntu-Medium hidden md:flex">{step.info}</p>
  </div>
</NavLink> */}
{/* <div className="text-white border-2 border-white rounded-full
              w-8 h-8 flex justify-center items-center 
              " 
              >
              {step.step}
            </div> */}

{/* <NavLink
  to={step.to}
  key={i}
  className={({ isActive }) => {
    const circleClass = isActive
      ? "bg-blue-200 text-black"
      : "text-white border-2 border-white";

    return `md:flex items-center gap-3 ${
      isActive ? "bg-Blue-950" : "bg-red-500 pointer-events-none"
    }`;
  }}
>
  {({ isActive }) => (
    <>
      <div
        className={`${
          isActive ? "bg-blue-200 text-black" : "text-white border-2 border-white"
        } rounded-full w-8 h-8 flex justify-center items-center`}
      >
        {step.step}
      </div>
      <div>
        <p className="text-xs text-Grey-500 font-Ubuntu-Medium uppercase hidden md:flex">
          {step.titleStep}
        </p>
        <p className="text-white uppercase font-Ubuntu-Medium hidden md:flex">
          {step.info}
        </p>
      </div>
    </>
  )}
</NavLink> */}