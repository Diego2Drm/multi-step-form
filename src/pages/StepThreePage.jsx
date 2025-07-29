import React from "react";
import { StepThreeMonthly } from "../components/StepThree/StepThreeMonthly";
import { StepThreeYearly } from "../components/StepThree/StepThreeYearly";

const StepThreePage = () => {

  return (
    <section className="step-secction">
      <StepThreeMonthly />
      {/* <StepThreeYearly /> */}

      <div className="bg-white absolute left-0 -bottom-24 w-full h-14 flex justify-between items-center px-5 md:relative">
        <p className="text-Grey-500 text-xs font-Ubuntu-Medium">Go Back</p>
        <button className="bg-Blue-950 text-Blue-100 p-2 text-xs rounded-sm">
          Next Step
        </button>
      </div>
    </section>
  )
};

export { StepThreePage };