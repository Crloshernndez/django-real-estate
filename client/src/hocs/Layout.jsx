import React from "react";

import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
