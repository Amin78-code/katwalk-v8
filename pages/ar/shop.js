import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Layout from "../../components/rtl/layout/Layout";
import ShopByCategory from "../../components/rtl/shop-by-category/ShopByCateg";
import TextImgSection from "../../components/rtl/text-img-section/TextImgSection";
import productImg1 from "../../assets/images/products/orange-1/img3.jpg";
import productImg2 from "../../assets/images/products/product2.jpg";
import productImg3 from "../../assets/images/products/product3.jpg";
import productImg4 from "../../assets/images/products/product4.jpg";
import img1 from "../../assets/images/products/orange-1/img1.jpg";
import img2 from "../../assets/images/products/orange-1/img2.jpg";
import img3 from "../../assets/images/products/orange-1/img3.jpg";
import img4 from "../../assets/images/products/orange-1/img4.jpg";
import styles from "../../components/rtl/shop.module.css";
import Features from "../../components/rtl/features/Features";
import ColorBox from "../../components/rtl/color-box/ColorBox";
import OtherProducts from "../../components/rtl/other-products/OtherProducts";
import ProductSlider from "../../components/rtl/product-slider/Product-slider";
import HeadingAndText from "../../components/rtl/heading-and-text/HeadingAndText";
import SizeGuideModal from "../../components/rtl/size-guide-modal/SizeGuideModal";
import MessageModal from "../../components/rtl/message-modal/MessageModal";
import ShopFilters from "../../components/rtl/shop-filters/ShopFilters";
import ProductCard from "../../components/rtl/product-card/ProductCard";
import Link from "next/link";


const otherProducts = [
  {
    img: productImg1,
    companyName: "Nada Line",
    productName: "Metallic Print Abaya",
    price: "760",
  },
  {
    img: productImg2,
    companyName: "Nada Line",
    productName: "Black Beaded Embroidery Abaya",
    price: "1.125",
  },
  {
    img: productImg3,
    companyName: "Nada Line",
    productName: "Crinkled Abaya with Printed Pattern",
    price: "760",
  },
  {
    img: productImg4,
    companyName: "Nada Line",
    productName: "Color Block Crinkled Abaya",
    price: "760",
  },
  {
    img: productImg2,
    companyName: "Nada Line",
    productName: "Black Beaded Embroidery Abaya",
    price: "1.125",
  },
  {
    img: productImg3,
    companyName: "Nada Line",
    productName: "Crinkled Abaya with Printed Pattern",
    price: "760",
  },
  {
    img: productImg1,
    companyName: "Nada Line",
    productName: "Metallic Print Abaya",
    price: "760",
  },
  {
    img: productImg2,
    companyName: "Nada Line",
    productName: "Black Beaded Embroidery Abaya",
    price: "1.125",
  },
];
function Shop() {
  useEffect(() => {
    document.querySelector("body").style.direction = 'rtl'
  }, [])

  return (
    <>
      <Layout>
        <div className="w-[100%] mt-[80px]">
          <ShopFilters />
        </div>
        <div className="flex mb-[60px] justify-between flex-wrap px-[0px]      sm:px-[10px] md:px-0">
          <div className="flex gap-x-[2px] mb-[60px] justify-center flex-wrap px-[0px]      sm:px-[10px] md:px-0">
            {otherProducts.map((value, index) => {
              return <ProductCard key={index} data={value} newTag={"none"} />;
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Shop;
