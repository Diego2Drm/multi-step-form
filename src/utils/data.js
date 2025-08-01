import iconArcade from "../assets/images/icon-arcade.svg"
import iconAdvanced from "../assets/images/icon-advanced.svg"
import iconPro from "../assets/images/icon-pro.svg"

export const steps = [
  { to: "/", step: 1, titleStep: "step 1", info: "Your info", },
  { to: "/step-two", step: 2, titleStep: "step 2", info: "Select plan", },
  { to: "/step-three", step: 3, titleStep: "step 3", info: "Add-ons", },
  { to: "/step-four", step: 4, titleStep: "step 4", info: "Summary", },
]

export const formData = [
  {
    htmlFor: "name",
    span: "Name",
    name: "name",
    type: "text",
    placeholder: "e.g. Stephen King",
    id: "name"
  },
  {
    htmlFor: "email",
    span: "Email Address",
    name: "email",
    type: "email",
    placeholder: "e.g. stephenking@lorem.com",
    id: "email"
  },
  {
    htmlFor: "number",
    span: "Phone Number",
    name: "phone",
    type: "number",
    placeholder: "e.g. +1234567890",
    id: "number"
  },
]

export const monthlyPlans = [
  {
    icon: iconArcade,
    title: "Arcade",
    price: 9
  },
  {
    icon: iconAdvanced,
    title: "Advanced",
    price: 12
  },
  {
    icon: iconPro,
    title: "Pro",
    price: 15
  },
]

export const yearlyPlans = [
  {
    icon: iconArcade,
    title: "Arcade",
    price: 90
  },
  {
    icon: iconAdvanced,
    title: "Advanced",
    price: 120
  },
  {
    icon: iconPro,
    title: "Pro",
    price: 150
  },
]

export const addOnsMonthly = [
  { title: "Online service", text: "Access to multiplayer games", price: 1 },
  { title: "Large Storage", text: "Extra 1TB of cloud save", price: 2 },
  { title: "Customizable profile", text: "Custom theme on your profile", price: 2 },
]

export const addOnsYearly = [
  { title: "Online service", text: "Access to multiplayer games", price: 10 },
  { title: "Large Storage", text: "Extra 1TB of cloud save", price: 20 },
  { title: "Customizable profile", text: "Custom theme on your profile", price: 20 },
]