import React from "react";
import { FinishingMonthly } from "../components/StepFour/FinishingMonthly";
import { FinishingYearly } from "../components/StepFour/FinishingYearly";

const StepFourPage = () => {

  return (
    <>
      <section className="step-secction">
        <h1 className="step-secction-title">Finishing up</h1>
        <p className="step-secction-text">
          Double-check everything looks OK before confirming.
        </p>
        {/* <FinishingMonthly /> */}
        <FinishingYearly />

      </section>

      <div className="bg-white absolute left-0 -bottom-32 w-full h-14 flex justify-between items-center px-5 md:relative md:-bottom-16">
        <p className="text-Grey-500 text-xs font-Ubuntu-Medium">Go Back</p>
        <button className="bg-Purple-600 text-Blue-100 py-2 px-5 text-xs rounded-sm">
          Confirm
        </button>
      </div>
    </>
  )
};

export { StepFourPage };