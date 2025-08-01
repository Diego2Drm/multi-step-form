import { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  // step-one --->
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value
    }))
  };

  // --->

  // step-two --->
  const [inputChecked, setInputChecked] = useState(null);
  const [inputCheckedYearly, setInputCheckedYearly] = useState(null);
  const [inputRadioMonthly, setInputRadioMonthly] = useState({});
  const [inputRadioYearly, setInputRadioYearly] = useState({});

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

  // --->

  // Step-Three
  const [addOnsMonthly, setAddOnsMonthly] = useState([]);
  const [addOnsYearly, setAddOnsYearly] = useState([]);

  const handleAddOnsMonthly = (title, price) => {

    const isSelected = addOnsMonthly.some(item => item.title === title);

    if (isSelected) {
      // ❌ Si ya existe, lo removemos (toggle OFF)
      setAddOnsMonthly(prev => prev.filter(item => item.title !== title));
    } else if (addOnsMonthly.length < 3) {
      // ✅ Si no existe y hay espacio, lo agregamos
      setAddOnsMonthly(prev => [...prev, { title, price }]);
    } else {
      // 🚫 Si hay 3 elementos, no agregamos más (puedes mostrar alerta si quieres)
      console.log("Solo puedes seleccionar hasta 3 complementos.");
    }
  }

  const handleAddOnsYearly = (title, price) => {
    const isSelected = addOnsYearly.some(item => item.title === title);

    if (isSelected) {
      setAddOnsYearly(prev => prev.filter(item => item.title !== title));
    } else {
      setAddOnsYearly(prev => [...prev, { title, price }]);
    }
  }

  // --->  

  const value = {
    inputs,
    handleChange,
    inputChecked,
    handleRadioMonthly,
    inputCheckedYearly,
    handleRadioYearly,
    handleAddOnsMonthly,
    handleAddOnsYearly,
    setAddOnsMonthly,
    inputRadioMonthly,
    addOnsMonthly,
    setAddOnsYearly,
    inputRadioYearly,
    addOnsYearly,
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context };