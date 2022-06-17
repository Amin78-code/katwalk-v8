import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Layout from "../components/layout/Layout";
import productImg1 from "../assets/images/products/orange-1/img3.jpg";
import productImg2 from "../assets/images/products/product2.jpg";
import productImg3 from "../assets/images/products/product3.jpg";
import productImg4 from "../assets/images/products/product4.jpg";
import styles from "../styles/Shop.module.css";
import ShopFilters from "../components/ShopFilters/ShopFilters";
import ProductCard from "../components/product-card/ProductCard";
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
