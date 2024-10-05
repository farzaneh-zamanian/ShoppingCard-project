import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import useCartContext from "../hook/useCartContext";

function Layout({ children }) {
  const { state } = useCartContext(); //CONTEXT

  return (
    <>
      <Header state = {state}/>
      {children}
      <Footer />
    </>
  );
}

export default Layout;
