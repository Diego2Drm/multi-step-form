import React from "react";
import iconThankYou from "../assets/images/icon-thank-you.svg"
const StepFivePage = () => {
  return (
    <section className="bg-white mt-7 px-4 rounded-xl shadow-md pb-20">
      <div className="flex flex-col items-center justify-center pt-10">
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

    </section>
  )
};

export { StepFivePage };