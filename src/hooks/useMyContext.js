import { useContext } from "react"
import { Context } from "../context/MyContext"

const useMyContext = () => {
  return useContext(Context)
};

export { useMyContext };