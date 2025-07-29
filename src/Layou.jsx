import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { BgSidebar } from "./components/NavBar/BgSidebar";

const Layout = ({ children }) => {

  return (
    <section className="min-h-full relative layout-desktop">
      <div className="relative md:w-1/3 md:h-full">
        <BgSidebar />

        <NavBar />

      </div>
      <div className="p-5 pt-6 md:w-2/3">
        {children}
      </div>
    </section>
  )
};

export { Layout };