import React from "react";
import { formData } from "./utils/data";
import { Button } from "./utils/Button";

const StepOne = () => {

  return (
    <>

      <section className="bg-white mt-7 px-4 py-8 rounded-xl shadow-md">
        <h1 className="text-Blue-950 font-Ubuntu-Bold text-2xl">Personal info</h1>
        <p className="text-Grey-500 font-Ubuntu-Regular text-sm w-3/4 mt-2">
          Please provide your name, email. address, and phone number.
        </p>

        <form className="mt-5 flex flex-col gap-3">
          {
            formData.map((data, i) => (
              <label htmlFor={data.htmlFor} className="form-label">
                <span className="form-span">{data.span}</span>
                <input className="form-input" type={data.type} id={data.id} placeholder={data.placeholder} />
              </label>
            ))
          }
        </form>
      </section>
        
      <Button text="Next Step"/> 
      
    </>
  )
};

export { StepOne };