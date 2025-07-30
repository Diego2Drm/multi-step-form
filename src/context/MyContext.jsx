import { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [inputs, setInputs] = useState({
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value
    }))
  };

  const value = {
    inputs,
    handleChange,
  }
  
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context };