import React from "react";
import { monthlyPlans } from "../../utils/data";

const StepMonthly = () => {

  return (
    <div>
      <ul className="mt-10 flex flex-col gap-5">
        {
          monthlyPlans.map((plan, i) => (
            <li key={i} className="flex gap-3 items-center border-2 border-blue-100 p-2 rounded-lg">
              <img src={plan.icon} alt="icon-plan" />
              <div>
                <p className="text-md text-Blue-950 font-Ubuntu-Bold">{plan.title}</p>
                <p className="text-xs text-Grey-500 font-Ubuntu-Regular">{plan.price}</p>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
};

export { StepMonthly };