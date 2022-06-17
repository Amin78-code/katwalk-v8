import Head from "next/head";
import Image from "next/image";
import AllUsedIcons from "../../components/rtl/AllUsedIcons";
import styles from "./styles/Home.module.css";
import About from "./about-us";
import Checkout from "./checkout";
import FAQ from "./faqs";
import HomePage from "./homePage";
import Login from "./users/login";
import PrivacyPolicy from "./privacypolicy";
import ProductDetail from "./product-detail";
import Shop from "./shop.js";
import Designers from "./designers";
import DesignerDetail from "./shop/designer";
import AdminPanel from "./dashboard/home";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.querySelector("body").style.direction = 'rtl'
  }, [])
  return (
    <>
      <HomePage />
      {/* <PrivacyPolicy /> */}
      {/* <FAQ /> */}
      {/* <About /> */}
      {/* <ProductDetail /> */}
      {/* <Checkout /> */}
      {/* <AllUsedIcons /> */}
      {/* <Login /> */}
      {/* <Shop /> */}
      {/* <Designers /> */}
      {/* <DesignerDetail /> */}

      {/* admin panel */}
      {/* <AdminPanel /> */}
    </>
  );
}
