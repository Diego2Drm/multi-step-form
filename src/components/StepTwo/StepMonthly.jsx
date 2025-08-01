import React from "react";
import { monthlyPlans } from "../../utils/data";
import { Link } from "react-router-dom";
import { useMyContext } from "../../hooks/useMyContext";

const StepMonthly = () => {
  const { inputChecked, handleRadioMonthly } = useMyContext();

  return (
    <>
      <div className="mt-10 flex flex-col gap-5 md:flex-row md:relative">
        {
          monthlyPlans.map((plan, i) => (
            <label key={i} className={`plan-list md:h-[10rem] cursor-pointer hover:outline-2 hover:outline-Purple-600
            ${inputChecked === plan.title ? "outline-2 outline-Purple-600 bg-Blue-100" : ""}
            `}
              onClick={() => handleRadioMonthly(plan.title, plan.price)}
            >
              <img src={plan.icon} alt="icon-plan" />
              <div>
                <p className="text-md text-Blue-950 font-Ubuntu-Bold">{plan.title}</p>
                <p className="text-xs text-Grey-500 font-Ubuntu-Regular">
                  ${plan.price}/mo
                </p>
              </div>
              {/* <input type="checkbox" name="" id="" className="opacity-0" /> */}
            </label>
          ))
        }
        <div className="bg-white absolute left-0 bottom-0 w-full h-14 flex justify-between items-center px-5 md:-bottom-48">
          <Link to="/" className="text-Grey-500 text-xs font-Ubuntu-Medium hover:text-Blue-950 hover:scale-105">Go Back</Link>
          <Link to="/step-three/monthly" className="bg-Blue-950 text-Blue-100 p-2 text-xs rounded-sm">
            Next Step
          </Link>
        </div>
      </div>
    </>
  )
};

export { StepMonthly };