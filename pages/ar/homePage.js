import React from "react";
import Layout from "../../components/rtl/layout/Layout";
import ShopByCateg from "../../components/rtl/shop-by-category/shopByCateg";


import TextImgSection from "../../components/rtl/text-img-section/TextImgSection";
import katwalkBag from "../../assets/images/designers/katwalk-bag.jpg";
import bestSellingProduct from "../../assets/images/best-selling/best-selling-product.jpg";
import Features from "../../components/rtl/features/Features";
import { useEffect } from "react";
import WebTopSection from "../../components/rtl/web-top-section/WebTopSection";
function HomePage() {
  useEffect(() => {
    document.querySelector("body").style.direction = 'rtl'
  }, [])
  const designerData = {
    title: "المصممات",
    text: "تسوقي مصمماتنا المبدعات",
    img: katwalkBag,
    type: "designer"
  };
  const bestSellingData = {
    title: "الأكثر مبيعًا",
    text: "اختيارات متسوقاتنا المفضلة",
    img: bestSellingProduct,
    type: "product",
  }



  const countries = ['Norway', 'Sweden', 'Denmark', 'New Zealand', 'North'];

  const startsWithN = countries.filter((country) => country.startsWith("No"));
  console.log(",startsWithN", startsWithN)
  return (
    <div className="far">
      <Layout>
        <WebTopSection />
        <ShopByCateg />
        <TextImgSection data={designerData} />
        <TextImgSection data={bestSellingData} />
        <Features />
      </Layout>
    </div>
  );
}

export default HomePage;
