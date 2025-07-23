import React from "react";
import { addOnsYearly } from "../../utils/data";

const StepThreeYearly = () => {


  return (
    <div>
      <h1 className="step-secction-title">Pick add-ons</h1>
      <p className="step-secction-text">Add-ons help enhance your gaming experience.</p>
      <ul className="mt-10 flex flex-col gap-5">
        {
            addOnsYearly.map((item, i) => (
            <label key={i}
              className="flex gap-6 justify-between items-center border-2 border-blue-100 p-2 px-3 rounded-lg"
            >
              <input type="checkbox" style={{ width: "2rem" }}
                className="w-5 h-5 inputStepThree"
              />

              <div className="w-full">
                <p className="text-md text-Blue-950 font-Ubuntu-Bold">{item.title}</p>
                <p className="text-xs text-Grey-500 font-Ubuntu-Regular">{item.text}</p>
              </div>

              <p className="text-Purple-600 text-sm font-Ubuntu-Medium">+${item.price}/yr</p>
            </label>
          ))

        }

      </ul>
    </div>

  )
};

export { StepThreeYearly };