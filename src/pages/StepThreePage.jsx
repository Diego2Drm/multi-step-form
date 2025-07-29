import React from "react";
import { Link } from "react-router-dom";
import { StepThreeMonthly } from "../components/StepThree/StepThreeMonthly";
import { StepThreeYearly } from "../components/StepThree/StepThreeYearly";

const StepThreePage = () => {

  return (
    <section className="step-secction">
      <StepThreeMonthly />
      {/* <StepThreeYearly /> */}

      <div className="bg-white absolute left-0 -bottom-24 w-full h-14 flex justify-between items-center px-5 md:relative">
        <Link to="/step-two" className="text-Grey-500 text-xs font-Ubuntu-Medium">Go Back</Link>
        <Link to="/step-four" className="bg-Blue-950 text-Blue-100 p-2 text-xs rounded-sm">
          Next Step
        </Link>
      </div>
    </section>
  )
};

export { StepThreePage };