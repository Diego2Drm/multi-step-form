import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import iconThankYou from "../assets/images/icon-thank-you.svg"
import { Context } from "../context/MyContext";

const StepFivePage = () => {
  const {
    setInputs,
    setInputChecked,
    setInputCheckedYearly,
    setInputRadioMonthly,
    setInputRadioYearly,
    setAddOnsMonthly,
    setAddOnsYearly
  } = useContext(Context);

  const navigate = useNavigate();
  const handleInitialStates = () => {
    setInputs({});
    setInputChecked(null);
    setInputCheckedYearly(null);
    setInputRadioMonthly({});
    setInputRadioYearly({});
    setAddOnsMonthly([]);
    setAddOnsYearly([]);

    navigate("/");
  }

  return (
    <section className="bg-white mt-7 px-4 rounded-xl shadow-md pb-20 md:shadow-none">
      <div className="flex flex-col items-center justify-center pt-10 ">
        <img src={iconThankYou} alt="icon-thank-you" />
        <h1 className="text-Blue-950 font-Ubuntu-Bold text-2xl mt-4">Thank you!</h1>
        <p className="text-Grey-500 font-Ubuntu-Regular text-center mt-3">
          Thansk for confirming your subscription!
          We hope you have fun using our
          plataform. if you evr need support,
          please feel free to email us at
          support@loremgaming.com.
        </p>
      </div>

      <div className="bg-white absolute left-0 -bottom-32 w-full h-14 flex justify-between items-center px-5 md:relative md:-bottom-30">
        <button onClick={handleInitialStates} className="bg-Purple-600 text-Blue-100 py-2 px-5 text-xs rounded-sm hover:opacity-60 cursor-pointer">
          Back Step 1
        </button>
      </div>
    </section>
  )
};

export { StepFivePage };