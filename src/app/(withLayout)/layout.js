import React from "react";

const Layout = ({ children }) => {
  return <div>
    <h2 className="text-2xl">Header</h2>
    {children}
    <h2 className="text-2xl">Footer</h2>
  </div>;
};

export default Layout;