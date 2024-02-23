import Navbar from "@/components/shared/Navbar";
import React from "react";

const Layout = ({ children }) => {
  return <div style={{fontFamily: "work sans"}}>
    {children}
  </div>;
};

export default Layout;