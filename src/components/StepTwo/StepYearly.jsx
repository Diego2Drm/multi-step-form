import React from "react";
import { yearlyPlans } from "../../utils/data";


const StepYeraly = () => {
  

  return (
    <div>
      <ul className="mt-10 flex flex-col gap-5">
        {
          yearlyPlans.map((plan, i) => (
            <li key={i} className="flex gap-3 items-center border-2 border-blue-100 p-2 rounded-lg">
              <img src={plan.icon} alt="icon-plan" />
              <div>
                <p className="text-md text-Blue-950 font-Ubuntu-Bold">{plan.title}</p>
                <p className="text-xs text-Grey-500 font-Ubuntu-Regular">{plan.price}</p>
                <p className="text-Blue-950 text-xs font-Ubuntu-Medium mt-1">2 months free </p>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
};

export { StepYeraly };