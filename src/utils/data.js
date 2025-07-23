import iconArcade from "../assets/images/icon-arcade.svg"
import iconAdvanced from "../assets/images/icon-advanced.svg"
import iconPro from "../assets/images/icon-pro.svg"

export const steps = [
  { to: "/step-one", step: 1, },
  { to: "/step-two", step: 2, },
  { to: "/step-three", step: 3, },
  { to: "/step-four", step: 4, },
]

export const formData = [
  {
    htmlFor: "name",
    span: "Name",
    type: "text",
    placeholder: "e.g. Stephen King",
    id: "name"
  },
  {
    htmlFor: "email",
    span: "Email Address",
    type: "email",
    placeholder: "e.g. stephenking@lorem.com",
    id: "email"
  },
  {
    htmlFor: "number",
    span: "Phone Number",
    type: "text",
    placeholder: "e.g. +1234567890",
    id: "number"
  },
]

export const monthlyPlans = [
  {
    icon: iconArcade,
    title: "Arcade",
    price: "$9/mo"
  },
  {
    icon: iconAdvanced,
    title: "Advanced",
    price: "$12/mo"
  },
  {
    icon: iconPro,
    title: "Pro",
    price: "$15/mo"
  },
]

export const yearlyPlans = [
  {
    icon: iconArcade,
    title: "Arcade",
    price: "$90/yr"
  },
  {
    icon: iconAdvanced,
    title: "Advanced",
    price: "$120/yr"
  },
  {
    icon: iconPro,
    title: "Pro",
    price: "$150/yr"
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