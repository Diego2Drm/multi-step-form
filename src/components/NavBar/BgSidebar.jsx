import React from "react";
import bgSidebarMobile from "../../assets/images/bg-sidebar-mobile.svg"
import bgSidebarDesktop from "../../assets/images/bg-sidebar-desktop.svg"

const BgSidebar = () => {
  return (
    <>
      <img src={bgSidebarMobile} alt="bg-sidebar-mobile"
        className="absolute -z-10 md:hidden "
      />
      <img src={bgSidebarDesktop} alt="bg-sidebar-desktop"
        className="absolute -z-10 hidden md:flex"
      />
    </>
  )
};

export { BgSidebar };
