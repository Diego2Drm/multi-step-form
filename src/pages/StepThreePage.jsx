import React from "react";
import { Link, useParams } from "react-router-dom";
import { StepThreeMonthly } from "../components/StepThree/StepThreeMonthly";
import { StepThreeYearly } from "../components/StepThree/StepThreeYearly";

const StepThreePage = () => {
  const { slug } = useParams();

  return (
    <section className="step-secction">
      {
        slug === "monthly" ?
          <StepThreeMonthly /> :
          <StepThreeYearly />
      }

      <div className="bg-white absolute left-0 -bottom-24 w-full h-14 flex justify-between items-center px-5 md:relative">
        <Link to="/step-two/monthly" className="text-Grey-500 text-xs font-Ubuntu-Medium hover:text-Blue-950 hover:scale-105">Go Back</Link>
        <Link to={`/step-four/${slug}`} className="bg-Blue-950 text-Blue-100 p-2 text-xs rounded-sm">
          Next Step
        </Link>
      </div>
    </section>
  )
};

export { StepThreePage };