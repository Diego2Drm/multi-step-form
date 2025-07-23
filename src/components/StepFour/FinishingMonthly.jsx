import React from "react";

const FinishingMonthly = () => {

  return (
    <div className="mt-6">
      <div className="bg-Blue-100 p-3 flex flex-col gap-4 rounded-md">
        <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2">
          <p className="flex flex-col">
            <span className="font-Ubuntu-Bold text-sm">Arcade (Monthly)</span>
            <span className="text-Grey-500 text-xs underline">Change</span>
          </p>
          <span className="font-Ubuntu-Bold text-Blue-950 text-sm">$9/mo</span>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-Grey-500 font-Ubuntu-Medium text-sm">
            Online service
          </p>
          <span className="text-Blue-950 text-xs font-Ubuntu-Medium">+$1/mo</span>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-Grey-500 font-Ubuntu-Medium text-sm">
            Larger storage
          </p>
          <span className="text-Blue-950 text-xs font-Ubuntu-Medium">+$2/mo</span>
        </div>

      </div>

      <div className="flex justify-between items-center mt-5 p-3">
        <p className="text-Grey-500 font-Ubuntu-Medium">
          Total (per month)
        </p>
        <span className="text-Purple-600 font-Ubuntu-Bold">+$12/mo</span>
      </div>
    </div>
  )
};

export { FinishingMonthly };