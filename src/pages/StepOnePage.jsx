import React from "react";
import {  useNavigate } from "react-router-dom";
import { formData } from "../utils/data";
import { useMyContext } from "../hooks/useMyContext";
// import { Button } from "../utils/Button";

const StepOnePage = () => {
  const navigate = useNavigate();
  const { inputs, handleChange } = useMyContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/step-two/monthly")
  }

  return (
    <>

      <section className="step-secction">
        <h1 className="step-secction-title">Personal info</h1>
        <p className="step-secction-text">
          Please provide your name, email. address, and phone number.
        </p>

        <form id="useForm"
          className="mt-5 flex flex-col gap-3"
          onSubmit={handleSubmit}>
          {
            formData.map((data, i) => (
              <label key={i} htmlFor={data.htmlFor} className="form-label">
                <span className="form-span">{data.span}</span>
                <input
                  className="form-input"
                  type={data.type}
                  name={data.name}
                  id={data.id}
                  placeholder={data.placeholder}
                  value={inputs[data.name] || ""}
                  onChange={handleChange}
                  required
                />
              </label>
            ))
          }
        </form>
      </section>

      <div className="bg-white absolute left-0 -bottom-36 w-full h-14 flex justify-end items-center pr-4 md:relative md:-bottom-6">
        <div to="/step-two" >
          <button type="submit" form="useForm" className="bg-Blue-950 text-Blue-100 p-2 text-xs rounded-sm cursor-pointer">Next Step</button>
        </div>
      </div>

    </>
  )
};

export { StepOnePage };