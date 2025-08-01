import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FinishingMonthly } from "../components/StepFour/FinishingMonthly";
import { FinishingYearly } from "../components/StepFour/FinishingYearly";
import { Context } from "../context/MyContext";

const StepFourPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate()
  const { setAddOnsMonthly, setAddOnsYearly } = useContext(Context);

  const handleNavigate = () => {
    setAddOnsMonthly([]);
    setAddOnsYearly([]);
    navigate(`/step-three/${slug}`)
  }

  return (
    <>
      <section className="step-secction">
        <h1 className="step-secction-title">Finishing up</h1>
        <p className="step-secction-text">
          Double-check everything looks OK before confirming.
        </p>

        {
          slug === "monthly" ?
            <FinishingMonthly /> :
            <FinishingYearly />
        }

      </section>

      <div className="bg-white absolute left-0 -bottom-32 w-full h-14 flex justify-between items-center px-5 md:relative md:-bottom-12 ">
        <button onClick={handleNavigate} className="text-Grey-500 text-xs font-Ubuntu-Medium hover:text-Blue-950 hover:scale-105 cursor-pointer">Go Back</button>
        <Link to="/step-five" className="bg-Purple-600 text-Blue-100 py-2 px-5 text-xs rounded-sm hover:opacity-50">
          Confirm
        </Link>
      </div>
    </>
  )
};

export { StepFourPage };