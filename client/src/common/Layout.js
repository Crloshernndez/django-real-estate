import { useEffect } from "react";
import { connect } from "react-redux";

import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
