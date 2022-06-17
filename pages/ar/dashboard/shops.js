import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../../components/rtl/layout/Layout";
import AdminPanelLayout from "../../../components/rtl/dashboard/admin-panel-layout/AdminPanelLayout";
import TitleAndTableCard from "../../../components/rtl/dashboard/title-and-table-card/TitleAndTableCard";
import TableHeader from "../../../components/rtl/dashboard/table-header/TableHeader";
import CardBody from "../../../components/rtl/dashboard/card-body/CardBody";
import HeadingBar from "../../../components/rtl/heading-bar/HeadingBar";
import styles from "../../../components/rtl/Shops.module.css";
import ChooseImage from "../../../components/rtl/dashboard/choose-image/ChooseImage";
import ChooseImageModal from "../../../components/rtl/dashboard/choose-image-modal/ChooseImageModal";
import TwoTabs from "../../../components/rtl/dashboard/two-tabs/TwoTabs";

function Shops() {
  useEffect(() => {
    document.querySelector("body").style.direction = 'rtl'
  }, [])
  const [shopDetails, setShopDetails] = useState({
    basicInfo: [
      { name: "product Name", value: "Test Designer" },
      { name: "Shop Logo (400x400)", value: "loadImg" },
      { name: "Designer Picture (1130x1500)", value: "loadImg" },
      { name: "shopAddress", value: "Saihat" },
      { name: "meta Title", value: "Aliya Designs" },
      { name: "meta description", value: "Aliya Designs" },
    ],
    bannerSetting: [
      {
        name: "Banners (1500x550)",
        value: "loadImg",
        note: "We had to limit height to maintian consistancy. In some device both side of the banner might be cropped for height limitation.",
      },
      {
        name: "Mobile Banners (550x547)",
        value: "loadImg",
        note: "We had to limit height to maintian consistancy. In some device both side of the banner might be cropped for height limitation.",
      },
    ],
    socialMediaLink: [
      { name: "Facebook", value: "Facebook", note: "nsert link with https" },
      { name: "Twitter", value: "Twitter", note: "nsert link with https" },
      { name: "Google", value: "Google", note: "nsert link with https" },
      { name: "Youtube", value: "Youtube", note: "nsert link with https" },
    ],
  });

  return (
    <>
      <Layout>
        <div className="w-[100%] min-h-[100vh] h-[auto]">
          <AdminPanelLayout active={"Shops"}>
            <HeadingBar heading={"Shop Settings"} shopsPage={true} />
            <div className="w-[100%] ">
              {/* Basic Info */}
              <TitleAndTableCard
                width={"w-[100% mb-[20px]"}
                zindex={" z-[2] relative"}
              >
                <TableHeader>Basic Info</TableHeader>
                <TwoTabs />
                <CardBody>
                  {shopDetails.basicInfo.map((value) => {
                    return (
                      <>
                        {value.value && value.value == "loadImg" ? (
                          <ChooseImage data={value} shopsPage={true} />
                        ) : (
                          <div key={value.name} className="fwr flex mb-[1rem] flex-col      lg:flex-row">
                            <p className="w-[100%]     lg:w-[23.4%] text-[#1b1b28] text-[13px] px-0     lg:px-[5px] capitalize pt-[7px]">
                              {value.name}
                              <span className="text-[#ff0032]">*</span>
                            </p>
                            <div className="w-[100%] px-0     lg:px-[15px]">
                              {value.name == "meta description" ? (
                                <textarea
                                  rows={3}
                                  className="admin-input w-[100%] min-h-[44px] fwl text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                                >
                                  {value.value}
                                </textarea>
                              ) : (
                                <input
                                  type="text"
                                  className="admin-input w-[100%] h-[44px] fwl text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                                  value={value.value}
                                />
                              )}
                            </div>
                          </div>
                        )}
                      </>
                    );
                  })}
                  <div className="flex justify-end">
                    <button className="light-brown-btn ffr text-[0.875rem] text-[#fff] h-[40px] leading-[40px] tracking-[0.5px] uppercase bg-[#c83e27] block px-[15px] m-[.25rem]">
                      save
                    </button>
                  </div>
                </CardBody>
              </TitleAndTableCard>

              {/* Banner Settings */}
              <TitleAndTableCard
                width={"w-[100% mb-[20px]"}
                zindex={" z-[2] relative "}
              >
                <TableHeader>Banner Settings</TableHeader>
                <CardBody>
                  {shopDetails.bannerSetting.map((value) => {
                    return (
                      <>
                        <ChooseImage data={value} shopsPage={true} />
                      </>
                    );
                  })}
                  <div className="flex justify-end">
                    <button className="light-brown-btn ffr text-[0.875rem] text-[#fff] h-[40px] leading-[40px] tracking-[0.5px] uppercase bg-[#c83e27] block px-[15px] m-[.25rem]">
                      save
                    </button>
                  </div>
                </CardBody>
              </TitleAndTableCard>

              {/* Social Media Link */}
              <TitleAndTableCard
                width={"w-[100% mb-[20px]"}
                zindex={" z-[2] relative "}
              >
                <TableHeader>Social Media Link</TableHeader>
                <CardBody>
                  {shopDetails.socialMediaLink.map((value) => {
                    return (
                      <div key={value.name} className="fwr flex mb-[1rem] flex-col      lg:flex-row">
                        <p className="w-[100%]     lg:w-[23.4%] text-[#1b1b28] text-[13px] px-0     lg:px-[5px] capitalize pt-[7px]">
                          {value.name}
                        </p>
                        <div className="w-[100%] px-0     lg:px-[15px]">
                          <input
                            type="text"
                            className="admin-input w-[100%] h-[44px] fwl text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                            value={value.value}
                          />
                          {value && value.note ? (
                            <p className="fwr text-[#6C757D] text-[13px] leading-[1.5] tracking-[0.5px]">
                              <small>{value.note}</small>
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    );
                  })}
                  <div className="flex justify-end">
                    <button className="light-brown-btn ffr text-[0.875rem] text-[#fff] h-[40px] leading-[40px] tracking-[0.5px] uppercase bg-[#c83e27] block px-[15px] m-[.25rem]">
                      save
                    </button>
                  </div>
                </CardBody>
              </TitleAndTableCard>
            </div>
          </AdminPanelLayout>
        </div>
      </Layout>
      <div id="upload_overlay" className="dnone">
        <ChooseImageModal />
      </div>
    </>
  );
}

export default Shops;
