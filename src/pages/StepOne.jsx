import React from "react";
import { formData } from "../utils/data";
import { Button } from "../utils/Button";

const StepOne = () => {

  return (
    <>

      <section className="step-secction">
        <h1 className="step-secction-title">Personal info</h1>
        <p className="step-secction-text">
          Please provide your name, email. address, and phone number.
        </p>

        <form className="mt-5 flex flex-col gap-3">
          {
            formData.map((data, i) => (
              <label key={i} htmlFor={data.htmlFor} className="form-label">
                <span className="form-span">{data.span}</span>
                <input className="form-input" type={data.type} id={data.id} placeholder={data.placeholder} />
              </label>
            ))
          }
        </form>
      </section>

      <div className="bg-white absolute left-0 -bottom-36 w-full h-14 flex justify-end items-center pr-4 ">
        <button className="bg-Blue-950 text-Blue-100 p-2 text-xs rounded-sm">
          Next Step
        </button>
      </div>

    </>
  )
};

export { StepOne };