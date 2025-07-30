import { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  // step-one
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value
    }))
  };

  // step-two
  const [inputChecked, setInputChecked] = useState(null);
  const [inputCheckedYearly, setInputCheckedYearly] = useState(null);
  const [inputRadioMonthly, setInputRadioMonthly] = useState({});
  const [inputRadioYearly, setInputRadioYearly] = useState({});
  console.log(inputRadioMonthly);
  console.log(inputRadioYearly);


  const handleRadioMonthly = (value, prcie) => {
    setInputChecked(prev => prev === value ? "null" : value)
    setInputRadioMonthly({
      ...inputRadioMonthly,
      title: value,
      price: prcie,
    }
    )
  }
  const handleRadioYearly = (value, prcie) => {
    setInputCheckedYearly(prev => prev === value ? "null" : value)
    setInputRadioYearly({
      ...inputRadioYearly,
      title: value,
      price: prcie,
    }
    )
  }
  
  const value = {
    inputs,
    handleChange,
    inputChecked,
    handleRadioMonthly,
    inputCheckedYearly,
    handleRadioYearly,
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context };