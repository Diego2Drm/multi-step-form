import React from "react";
import { addOnsMonthly } from "../../utils/data";
import { useMyContext } from "../../hooks/useMyContext";

const StepThreeMonthly = () => {
  const { handleAddOnsMonthly } = useMyContext()

  return (
    <div>
      <h1 className="step-secction-title">Pick add-ons</h1>
      <p className="step-secction-text">Add-ons help enhance your gaming experience.</p>
      <ul className="mt-6 flex flex-col gap-5">
        {
          addOnsMonthly.map((item, i) => (
            <label key={i}
              className="flex gap-6 justify-between items-center border-2 border-blue-100 p-2 px-3 rounded-lg
              has-checked:outline-2 has-checked:outline-Purple-600 has-checked:bg-Blue-100 hover:outline-2 hover:outline-Purple-600 cursor-pointer
              "
              
            >
              <input type="checkbox" style={{ width: "2rem" }}
                className="w-5 h-5 inputStepThree"
                onChange={() => handleAddOnsMonthly(item.title, item.price)}
              />

              <div className="w-full">
                <p className="text-md text-Blue-950 font-Ubuntu-Bold">{item.title}</p>
                <p className="text-xs text-Grey-500 font-Ubuntu-Regular">{item.text}</p>
              </div>

              <p className="text-Purple-600 text-sm font-Ubuntu-Medium">+${item.price}/mo</p>
            </label>
          ))

        }

      </ul>
    </div>

  )
};

export { StepThreeMonthly };

// has-checked:bg-indigo-50 has-checked:text-indigo-900 has-checked:ring-indigo-200