import Head from "next/head";
import { useEffect } from "react";
import "../styles/globals.css";
import styles from "../components/dashboard/modal/Modal.module.css";
import styles_rtl from "../components/rtl/dashboard/modal/Modal.module.css";
import styles1 from "../components/uploads.module.css";
import styles1_rtl from "../components/rtl/uploads.module.css";

import styles2 from "../components/Edit.module.css";
import styles2_rtl from "../components/rtl/Edit.module.css";



export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.classList.contains("ddd")) {
        let dropdowns = document.querySelectorAll(".dblock");
        dropdowns.forEach((dropdown) => dropdown.classList.remove("dblock"));

        let allDs = document.querySelectorAll(".ddd");
        let url = window.location.href;
        url = url.split("/");

        if (url.includes("ar")) {
          allDs.forEach((allD) => allD.classList.remove(styles_rtl.red_border));
          allDs.forEach((allD) => allD.classList.remove(styles1_rtl.red_border));
          allDs.forEach((allD) => allD.classList.remove(styles2_rtl.red_border));
          allDs.forEach((allD) => allD.classList.remove('border-[#c53a24]'));

          allDs.forEach((allD) => allD.classList.remove('f-in'));
          allDs.forEach((allD) => allD.classList.remove('rotate180b'));
          

        } else {
          allDs.forEach((allD) => allD.classList.remove(styles.red_border));
          allDs.forEach((allD) => allD.classList.remove(styles1.red_border));
          allDs.forEach((allD) => allD.classList.remove(styles2.red_border));
          allDs.forEach((allD) => allD.classList.remove('border-[#c53a24]'));

          allDs.forEach((allD) => allD.classList.remove('f-in'));
          allDs.forEach((allD) => allD.classList.remove('rotate180b'));
          
        }

      }
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
