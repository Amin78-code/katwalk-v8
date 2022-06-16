 
import HomePage from "./homePage";
 
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.querySelector("body").style.direction = 'ltr'
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
