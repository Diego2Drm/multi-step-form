import React from "react";
import { useMyContext } from "../../hooks/useMyContext";
import { useNavigate } from "react-router-dom";

const FinishingMonthly = () => {
  const { inputRadioMonthly, addOnsMonthly, setAddOnsMonthly } = useMyContext();
  const navigate = useNavigate();
  const totalInputRadioMonthly = inputRadioMonthly?.price
  const totalAddOnsMonthly = addOnsMonthly.reduce((acc, item) => acc + Number(item.price), 0)
  const total = totalInputRadioMonthly + totalAddOnsMonthly;

  const handleEmpty = () => {
    setAddOnsMonthly([]);
    navigate('/step-two/monthly');
  }

  return (
    <div className="mt-6">
      <div className="bg-Blue-100 p-3 flex flex-col gap-4 rounded-md">
        {
          inputRadioMonthly?.title && (
            <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2">
              <p className="flex flex-col items-start">
                <span className="font-Ubuntu-Bold text-sm">{inputRadioMonthly.title} (Monthly)</span>
                <button onClick={handleEmpty} className="text-Grey-500 text-xs underline">Change</button>
              </p>
              <span className="font-Ubuntu-Bold text-Blue-950 text-sm">${inputRadioMonthly.price}/mo</span>
            </div>
          )
        }

        {
          addOnsMonthly.map((item, i) =>
            <div key={i} className="flex justify-between items-center">
              <p className="text-Grey-500 font-Ubuntu-Medium text-sm">
                {item.title}
              </p>
              <span className="text-Blue-950 text-xs font-Ubuntu-Medium">+${item.price}/mo</span>
            </div>
          )
        }

      </div>

      <div className="flex justify-between items-center mt-5 p-3">
        <p className="text-Grey-500 font-Ubuntu-Medium">
          Total (per month)
        </p>
        <span className="text-Purple-600 font-Ubuntu-Bold">+${total}/mo</span>
      </div>
    </div>
  )
};

export { FinishingMonthly };

{/* <div className="flex justify-between items-center">
  <p className="text-Grey-500 font-Ubuntu-Medium text-sm">
    Larger storage
  </p>
  <span className="text-Blue-950 text-xs font-Ubuntu-Medium">+$2/mo</span>
</div> */}