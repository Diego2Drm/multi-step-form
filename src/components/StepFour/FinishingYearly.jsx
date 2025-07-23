import React from "react";

const FinishingYearly = () => {
  return (
    <div className="mt-6">
      <div className="bg-Blue-100 p-3 flex flex-col gap-4 rounded-md">
        <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2">
          <p className="flex flex-col">
            <span className="font-Ubuntu-Bold text-sm">Arcade (Yaerly)</span>
            <span className="text-Grey-500 text-xs underline">Change</span>
          </p>
          <span className="font-Ubuntu-Bold text-Blue-950 text-sm">
            $90/yr
          </span>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-Grey-500 font-Ubuntu-Medium text-sm">
            Online service
          </p>
          <span className="text-Blue-950 text-xs font-Ubuntu-Medium">
            +$10/yr
          </span>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-Grey-500 font-Ubuntu-Medium text-sm">
            Larger storage
          </p>
          <span className="text-Blue-950 text-xs font-Ubuntu-Medium">
            +$20/yr
          </span>
        </div>

      </div>

      <div className="flex justify-between items-center mt-5 p-3">
        <p className="text-Grey-500 font-Ubuntu-Medium">
          Total (per year)
        </p>
        <span className="text-Purple-600 font-Ubuntu-Bold">
          +$120/mo
        </span>
      </div>
    </div>
  )
};

export { FinishingYearly };
