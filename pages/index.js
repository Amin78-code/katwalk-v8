 
 import Layout from "../components/layout/Layout";
 import katwalkBag from "../assets/images/designers/katwalk-bag.jpg";
 import bestSellingProduct from "../assets/images/best-selling/best-selling-product.jpg";
 import Features from "../components/features/Features";
 import WebTopSection from "../components/web-top-section/WebTopSection";
 
import { useEffect } from "react";
import TextImageSection from "../components/TextImageSection/TextImageSection";
import ShopByCat from "../components/ShopByCat/ShopByCat";

export default function Home() {
  useEffect(() => {
    document.querySelector("body").style.direction = 'ltr'
  }, [])
  const designerData = {
    title: "designers",
    text: "Explore our talented and independent designers.",
    img: katwalkBag,
    type: "designer"
  };
  const bestSellingData = {
    title: "Best Selling",
    text: "Our customers' favorite picks",
    img: bestSellingProduct,
    type: "product"
  }


  return (

    <Layout>
    <WebTopSection />
    <ShopByCat />
    <TextImageSection data={designerData} />
    <TextImageSection data={bestSellingData} />
    <Features />
  </Layout>
  );
}
