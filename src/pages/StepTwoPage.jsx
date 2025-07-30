import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { StepMonthly } from "../components/StepTwo/StepMonthly";
import { StepYeraly } from "../components/StepTwo/StepYearly";
import { ChangePlan } from "../components/StepTwo/ChangePlan";

const StepTwoPage = () => {
  const { slug } = useParams()
  
  const [plan, setPlan] = useState(false);

  return (
    <>
      <section className="step-secction mb-16">
        <h1 className="step-secction-title">Select your plan</h1>
        <p className="step-secction-text">You have the option of monthly or yearly billing.</p>

        {
          slug === "monthly" ?
            <StepMonthly /> :
            <StepYeraly />
        }

        <ChangePlan plan={plan} setPlan={setPlan} slug={slug} />
      </section >
    </>
  )
};

export { StepTwoPage };