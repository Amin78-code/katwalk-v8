import React from "react";
import springImg from "../../../assets/images/categories/spring.jpg";
import printImg from "../../../assets/images/categories/print.jpg";
import blackImg from "../../../assets/images/categories/black.jpg";
import eveningImg from "../../../assets/images/categories/evening.jpg";
import formalImg from "../../../assets/images/categories/formal.jpg";
import casualImg from "../../../assets/images/categories/casual.jpg";
import ShopByCategorySection from "../shop-by-category-section/ShopByCategorySection";

function ShopByCateg() {
  const shopByStyle = {
    title: "تسوقي حسب الموضة",
    text: "اكتشفي آخر صيحات الموضة وتسوقي حسب ستايلك المفضل",
    subCategories: [
      {
        img: springImg,
        name: "الربيع",
      },
      {
        img: printImg,
        name: "طبعة",
      },
      {
        img: blackImg,
        name: "أسود",
      },
    ],
  };
  const shopByOccasion = {
    title: "تسوق حسب المناسبة",
    text: "اختياركِ في كل مناسبة",
    subCategories: [
      {
        img: eveningImg,
        name: "سهرة",
      },
      {
        img: formalImg,
        name: "رسمي",
      },
      {
        img: casualImg,
        name: "كاجول",
      },
    ],
  };
  return (
    <>
      <ShopByCategorySection data={shopByStyle} />
      <ShopByCategorySection data={shopByOccasion} />
    </>
  );
}

export default ShopByCateg;
