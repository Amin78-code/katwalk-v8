import React, { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "../../../components/rtl/layout/Layout";
import AdminPanelLayout from "../../../components/rtl/dashboard/admin-panel-layout/AdminPanelLayout";
import TitleAndTableCard from "../../../components/rtl/dashboard/title-and-table-card/TitleAndTableCard";
import TableHeader from "../../../components/rtl/dashboard/table-header/TableHeader";
import TwoColTableWithHeading from "../../../components/rtl/dashboard/two-col-table-with-heading/TwoColTableWithHeading";
import CardBody from "../../../components/rtl/dashboard/card-body/CardBody";
import TwoColTable from "../../../components/rtl/dashboard/two-col-table/TwoColTable";
import HeadingBar from "../../../components/rtl/heading-bar/HeadingBar";
import ContrastPipingTrimAbaya from "../../../assets/images/products/Contrast Piping Trim Abaya.jpg";
import CurvyFrontLinebuttonAbaya from "../../../assets/images/products/Curvy Front Line button Abaya.jpg";
import PearlEmbroideryAbaya from "../../../assets/images/products/Pearl Embroidery Abaya.jpg";
import PrintedSleeveAbaya from "../../../assets/images/products/Printed Sleeve Abaya.jpg";
import AbayaSetwithSideSlet from "../../../assets/images/products/Abaya Set with Side Slet.jpg";

import WishListCard from "../../../components/rtl/dashboard/wishlist-card/WishListCard";
import BottomShadowCard from "../../../components/rtl/dashboard/bottom-shadow-card/BottomShadowCard";

function Wishlists() {
  useEffect(() => {
    document.querySelector("body").style.direction = 'rtl'
  }, [])
  const [wishlistItems, setWishlistItems] = useState([]);
  // const [wishlistItems, setWishlistItems] = useState([
  //   {
  //     img: ContrastPipingTrimAbaya,
  //     name: "Contrast Piping Trim Abaya",
  //     price: "750",
  //   },
  //   {
  //     img: CurvyFrontLinebuttonAbaya,
  //     name: "Curvy Front Line button Abaya",
  //     price: "820",
  //   },
  //   {
  //     img: AbayaSetwithSideSlet,
  //     name: "Abaya Set with Side Slet",
  //     price: "1400",
  //   },
  //   {
  //     img: PrintedSleeveAbaya,
  //     name: "Printed Sleeve Abaya",
  //     price: "920",
  //   },
  //   {
  //     img: PearlEmbroideryAbaya,
  //     name: "Pearl Embroidery Abaya",
  //     price: "885",
  //   },
  // ]);

  return (
    <>
      <Layout>
        <div className="w-[100%] min-h-[100vh] h-[auto]">
          <AdminPanelLayout active={"Wishlists"}>
            <HeadingBar
              heading={"قائمة الرغبات"}
              lightHeadingBar={true}
            ></HeadingBar>
            {wishlistItems && wishlistItems == "" ? (
              <div className="pb-[40px]">
                <BottomShadowCard>
                  <h5 className="far text-[#1b1b28] text-[13px] leading-[1.5] tracking-[0.5px] text-center mt-[17px]">
                    لم يتم إضافة أي شيء حتى الآن
                  </h5>
                </BottomShadowCard>
              </div>
            ) : (
              <div className="flex flex-wrap gap-x-[.9%]">
                {wishlistItems.map((value) => {
                  return <WishListCard key={value + 1} data={value} />;
                })}
              </div>
            )}
          </AdminPanelLayout>
        </div>
      </Layout>
    </>
  );
}

export default Wishlists;
