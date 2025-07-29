import React from "react";
import { monthlyPlans } from "../../utils/data";

const StepMonthly = () => {

  return (
    <>
      <ul className="mt-10 flex flex-col gap-5 md:flex-row">
        {
          monthlyPlans.map((plan, i) => (
            <li key={i} className="plan-list md:h-[10rem]">
              <img src={plan.icon} alt="icon-plan" />
              <div>
                <p className="text-md text-Blue-950 font-Ubuntu-Bold">{plan.title}</p>
                <p className="text-xs text-Grey-500 font-Ubuntu-Regular">{plan.price}</p>
              </div>
            </li>
          ))
        }
      </ul>
    </>
  )
};

export { StepMonthly };