import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../../components/rtl/layout/Layout";
import AdminPanelLayout from "../../../components/rtl/dashboard/admin-panel-layout/AdminPanelLayout";
import TitleAndTableCard from "../../../components/rtl/dashboard/title-and-table-card/TitleAndTableCard";
import TableHeader from "../../../components/rtl/dashboard/table-header/TableHeader";
import TwoColTableWithHeading from "../../../components/rtl/dashboard/two-col-table-with-heading/TwoColTableWithHeading";
import CardBody from "../../../components/rtl/dashboard/card-body/CardBody";
import TwoColTable from "../../../components/rtl/dashboard/two-col-table/TwoColTable";
import HeadingBar from "../../../components/rtl/heading-bar/HeadingBar";
import verified from "../../../assets/images/icons/verified.png";
import statusCard1 from "../../../assets/images/dashboard/home/status-card1.svg";
import statusCard2 from "../../../assets/images/dashboard/home/status-card2.svg";
import statusCard3 from "../../../assets/images/dashboard/home/status-card3.svg";
import styles from "../../../components/rtl/home.module.css";

const statusCardData = [
  {
    number: "2",
    title: "منتجات",
    svg: statusCard1,
  },
  {
    number: "0",
    title: "إجمالي البيع",
    svg: statusCard2,
  },
  {
    number: "0",
    title: "الأرباح الكلية",
    svg: statusCard3,
  },
  {
    number: "0",
    title: "طلبات ناجحة",
    svg: statusCard1,
  },
];
const ordersData = [
  { title: "إجمالي الطلبات", value: "0" },
  { title: "طلبات معلقة", value: "0" },
  { title: "طلبات إلغاء", value: "0" },
  { title: "طلبات ناجحة", value: "0" },
];
const productsData = {
  headings: ["category", "product"],
  data: [
    {
      value: ["Abaya", 2],
    },
  ],
};

function AdminPanel() {
  useEffect(() => {
    document.querySelector("body").style.direction = "rtl";
  }, []);
  return (
    <>
      <Layout>
        <div className="w-[100%] min-h-[100vh] h-[auto]">
          <AdminPanelLayout active={"Dashboard"}>
            <HeadingBar heading={"حسابی"} />
            <div className="flex justify-between gap-x-[20px] flex-col      lg:flex-row">
              {statusCardData.map((value, index) => {
                return (
                  <StatusCard
                    key={value.title + 1}
                    data={value}
                    index={index}
                  />
                );
              })}
            </div>
            <div className="w-[100%] flex gap-x-[20px] flex-col      lg:flex-row">
              <TitleAndTableCard width={"w-[100%] lg:w-[56.25%]"}>
                <TableHeader>طلبات</TableHeader>
                <CardBody>
                  <TwoColTable data={ordersData} />
                </CardBody>
              </TitleAndTableCard>
              <div className="mt-[1.5rem] w-[100%]     lg:w-[43.75%]">
                <TitleAndTableCard>
                  {/* <CardBody p={t:"10",r:"20",b:"10",l:"40"}> */}
                  <CardBody broad={true}>
                    <div className="flex justify-center items-center">
                      <div className="max-w-[130px] max-h-[130px] my-[5px]">
                        <span className="image_container">
                          <Image src={verified} alt="image" />
                        </span>
                      </div>
                    </div>
                  </CardBody>
                </TitleAndTableCard>
              </div>
            </div>
            <div className="w-[100%] flex gap-x-[20px] mt-[20px] flex-col      lg:flex-row">
              <TitleAndTableCard width={"w-[100%]     lg:w-[62.5%] h-[100%]"}>
                <TableHeader>منتجات</TableHeader>
                <CardBody>
                  <TwoColTableWithHeading
                    data={productsData}
                    pageName={"dashboardHomePage"}
                  />

                  <Link href="/ar/dashboard/products/uploads">
                    <a>
                      <button className="light-brown-btn text-[0.875rem] text-[#fff] leading-[40px] tracking-[0.5px] uppercase bg-[#c83e27] block px-[15px] mt-[20px] mx-auto">
                        add new product
                      </button>
                    </a>
                  </Link>
                </CardBody>
              </TitleAndTableCard>
              <div className="w-[100%]     lg:w-[37.5%]">
                <div className="mt-[1.5rem]">
                  <TitleAndTableCard>
                    {/* <CardBody p={t:"10",r:"20",b:"10",l:"40"}> */}
                    <CardBody simple={true}>
                      <div className="flex justify-center items-center">
                        <div className="text-center">
                          <h5 className=" text-[13px] text-[#1b1b28] leading-[1.5] tracking-[0.5px] capitalize">
                            shop
                          </h5>
                          <p className=" text-[#6b6e73] text-[13px] leading-[1.5] tracking-[0.5px] my-[13px]">
                            Manage &#38; organize your shop
                          </p>
                          <Link href="./shops">
                            <a>
                              <button
                                className={` pink-btn h-[40px] text-[#e62e04] text-[0.875rem] text-center uppercase bg-[#e62e0426] tracking-[0.5px] taPoint3 py-[10px] px-[15px] cursor-pointer mx-auto`}
                              >
                                go to setting
                              </button>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </CardBody>
                  </TitleAndTableCard>
                </div>
                <div className="mt-[1.5rem]">
                  <TitleAndTableCard>
                    <CardBody simple={true}>
                      <div className="flex justify-center items-center">
                        <div className="text-center">
                          <h5 className=" text-[13px] text-[#1b1b28] leading-[1.5] tracking-[0.5px] capitalize">
                            payment
                          </h5>
                          <p className=" text-[#6b6e73] text-[13px] leading-[1.5] tracking-[0.5px] my-[13px]">
                            Configure your payment method
                          </p>
                          <Link href="./profile">
                            <a>
                              <button
                                className={` pink-btn h-[40px] text-[#e62e04] text-[0.875rem] text-center uppercase bg-[#e62e0426] tracking-[0.5px] taPoint3 py-[10px] px-[15px] cursor-pointer mx-auto`}
                              >
                                configure now
                              </button>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </CardBody>
                  </TitleAndTableCard>
                </div>
              </div>
            </div>
          </AdminPanelLayout>
        </div>
      </Layout>
    </>
  );
}

function StatusCard({ data, index }) {
  return (
    <div
      className={`w-[100%] h-[auto] ${
        index == 0
          ? "bg-[#609cde]"
          : index == 1
          ? "bg-[#e5488a]"
          : index == 2
          ? "bg-[#624ebc]"
          : index == 3
          ? "bg-[#609cde]"
          : ""
      } mb-[1.5rem] rounded-[0.3rem]`}
    >
      <div
        className={`${
          index == 0
            ? styles.bg_grad_1
            : index == 1
            ? styles.bg_grad_2
            : index == 2
            ? styles.bg_grad_3
            : index == 3
            ? styles.bg_grad_4
            : ""
        } text-white rounded-lg mb- 4 overflow-hidden`}
      >
        <div className="px-[1rem] pt-[1rem]">
          <div className=" text-[14px]">
            {data.title == "Total earnings" ? "SAR " : ""}
            {data.number}
          </div>
          <div className="opacity-[.5] far text-[13px] text-[#fff] h-[40px]">
            {data.title}
          </div>
        </div>
        <span className="image_container">
          <Image src={data.svg} alt="image" />
        </span>
      </div>
    </div>
  );
}

export default AdminPanel;
