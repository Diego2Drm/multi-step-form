import React from "react";

const ChengePlan = ({plan, setPlan}) => {

  return (
    <div className="bg-Blue-100 my-5 rounded-lg flex justify-center items-center p-2 gap-5">
      <span className={`${plan && 'text-Grey-500'} text-Blue-950 font-Ubuntu-Medium text-xs`}>Monthly</span>

      <label className="rounded-3xl w-10 h-5 relative flex items-center justify-center bg-Blue-950 label-steptwo">
        <input type="checkbox"
          onChange={(e) => setPlan(e.target.checked)}
          defaultChecked={plan}
          className="appearance-none"
        />
        <span className="absolute left-1 w-3 h-3 rounded-full z-20 bg-white transition ease-in-out duration-500"></span>
      </label>

      <span className={`${!plan && 'text-Grey-500'} text-Blue-950 font-Ubuntu-Medium text-xs`}>Yearly</span>
    </div>

  )
};

export { ChengePlan };