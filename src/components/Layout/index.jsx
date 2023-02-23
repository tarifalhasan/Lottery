import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <MobileMenu />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
