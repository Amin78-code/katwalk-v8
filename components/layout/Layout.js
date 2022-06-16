import React, { useState, useRef, useEffect } from "react";
import GoToTop from "../go-to-top/GoToTop";
import Footer from "./footer/Footer";
import Navigation from "./navigation/Navigation";

const Layout = ({ children, footer }) => {
  const [scrollTop, setScrollTop] = useState("");

  useEffect(() => {
    const scrollingFunction = () => {
      if (window.scrollY > 600) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    }
    window.addEventListener("scroll", scrollingFunction());
    return () => {
      window.removeEventListener("scroll", scrollingFunction());
    };
  }, []);

  function top(e) {
    e.preventDefault()
    window.scrollTo(0, 0)
  }

  return (
    <>
      {footer == "none" ? (
        <>
          <Navigation />
          {children}
        </>
      ) : (
        <>
          <Navigation />
          {children}
          {scrollTop == true ? <GoToTop top={top} /> : ""}
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
