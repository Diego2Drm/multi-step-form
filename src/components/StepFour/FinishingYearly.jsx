import React from "react";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../../hooks/useMyContext";

const FinishingYearly = () => {
  const navigate = useNavigate();
  const { inputRadioYearly, addOnsYearly, setAddOnsYearly } = useMyContext();
  const totalInputRadioYearly = inputRadioYearly?.price;
  const totalAddOnsYearly = addOnsYearly.reduce((cur, item) => cur + item.price, 0);
  const total = totalInputRadioYearly + totalAddOnsYearly;

  const handleEmpty = () => {
    setAddOnsYearly([]);
    navigate('/step-two/yearly');
  }

  return (
    <div className="mt-6">
      <div className="bg-Blue-100 p-3 flex flex-col gap-4 rounded-md">
        {
          inputRadioYearly?.title && (
            <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2">
              <p className="flex flex-col items-start">
                <span className="font-Ubuntu-Bold text-sm">
                  {inputRadioYearly.title} (Yaerly)</span>
                <button onClick={handleEmpty} className="text-Grey-500 text-xs underline">Change</button>
              </p>
              <span className="font-Ubuntu-Bold text-Blue-950 text-sm">
                ${inputRadioYearly.price}/yr
              </span>
            </div>
          )
        }

        {
          addOnsYearly.map((item, i) => (
            <div key={i} className="flex justify-between items-center">
              <p className="text-Grey-500 font-Ubuntu-Medium text-sm">
                {item.title}
              </p>
              <span className="text-Blue-950 text-xs font-Ubuntu-Medium">
                +${item.price}/yr
              </span>
            </div>
          ))
        }


      </div>

      <div className="flex justify-between items-center mt-5 p-3">
        <p className="text-Grey-500 font-Ubuntu-Medium">
          Total (per year)
        </p>
        <span className="text-Purple-600 font-Ubuntu-Bold">
          +${total}/mo
        </span>
      </div>
    </div>
  )
};

export { FinishingYearly };

// <div className="flex justify-between items-center">
//   <p className="text-Grey-500 font-Ubuntu-Medium text-sm">
//     Larger storage
//   </p>
//   <span className="text-Blue-950 text-xs font-Ubuntu-Medium">
//     +$20/yr
//   </span>
// </div>