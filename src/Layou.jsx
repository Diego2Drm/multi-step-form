import React from "react";
import bgSidebarMobile from "./assets/images/bg-sidebar-mobile.svg"
import { steps } from "./utils/data";

const Layout = ({ children }) => {

  return (
    <section>
      <img src={bgSidebarMobile} alt="bg-sidebar-mobile"
        className="absolute -z-10"
      />
      <div className="p-5">
        <ul className="flex justify-center gap-5 pt-5">
          {
            steps.map((step, i) => (
              <li key={i}
                className="text-white border-2 border-white rounded-full
              w-8 h-8 flex justify-center items-center nth-[1]:bg-Blue-200 nth-[1]:text-black
              ">
                {step.step}
              </li>
            ))
          }
        </ul>
        {children}
      </div>
    </section>
  )
};

export { Layout };