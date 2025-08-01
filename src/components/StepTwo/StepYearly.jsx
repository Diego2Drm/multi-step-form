import React from "react";
import { yearlyPlans } from "../../utils/data";
import { Link } from "react-router-dom";
import { useMyContext } from "../../hooks/useMyContext";


const StepYeraly = () => {
  const { inputCheckedYearly, handleRadioYearly } = useMyContext();

  return (
    <>
      <ul className="mt-10 flex flex-col gap-5 md:flex-row md:mt-8 ">
        {
          yearlyPlans.map((plan, i) => (
            <li key={i} className={`plan-list md:h-[11rem]
            cursor-pointer hover:outline-2 hover:outline-Purple-600
            ${inputCheckedYearly === plan.title ? "outline-2 outline-Purple-600 bg-Blue-100" : ""}`}
              onClick={() => handleRadioYearly(plan.title, plan.price)}
            >
              <img src={plan.icon} alt="icon-plan" />
              <div>
                <p className="text-md text-Blue-950 font-Ubuntu-Bold">{plan.title}</p>
                <p className="text-xs text-Grey-500 font-Ubuntu-Regular">${plan.price}/yr</p>
                <p className="text-Blue-950 text-xs font-Ubuntu-Medium mt-1">2 months free </p>
              </div>
            </li>
          ))
        }
      </ul>

      <div className="bg-white absolute left-0 bottom-0 w-full h-14 flex justify-between items-center px-5 md:relative md:-bottom-32">
        <Link to="/" className="text-Grey-500 text-xs font-Ubuntu-Medium hover:text-Blue-950 hover:scale-105">Go Back</Link>
        <Link to="/step-three/yearly" className="bg-Blue-950 text-Blue-100 p-2 text-xs rounded-sm">
          Next Step
        </Link>
      </div>
    </>
  )
};

export { StepYeraly };