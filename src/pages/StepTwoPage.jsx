import React, { useState } from "react";
import { StepMonthly } from "../components/StepTwo/StepMonthly";
import { StepYeraly } from "../components/StepTwo/StepYearly";
import { ChengePlan } from "../components/StepTwo/ChangePlan";

const StepTwoPage = () => {
  const [plan, setPlan] = useState(false);

  return (
    <>
      <section className="step-secction mb-16">
        <h1 className="step-secction-title">Select your plan</h1>
        <p className="step-secction-text">Ypu have the option of monthly or yearly billing.</p>

        {
          plan ?
            <StepYeraly /> :
            <StepMonthly />
        }

        <ChengePlan plan={plan} setPlan={setPlan}/>

      </section >

      <div className="bg-white absolute left-0 bottom-0 w-full h-14 flex justify-between items-center px-5">
        <p className="text-Grey-500 text-xs font-Ubuntu-Medium">Go Back</p>
        <button className="bg-Blue-950 text-Blue-100 p-2 text-xs rounded-sm">
          Next Step
        </button>
      </div>
    </>
  )
};

export { StepTwoPage };