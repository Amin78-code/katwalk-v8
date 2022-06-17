import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import AdminPanelLayout from "../../components/dashboard/admin-panel-layout/AdminPanelLayout";
import TitleAndTableCard from "../../components/dashboard/title-and-table-card/TitleAndTableCard";
import TableHeader from "../../components/dashboard/table-header/TableHeader";
import TwoColTableWithHeading from "../../components/dashboard/two-col-table-with-heading/TwoColTableWithHeading";
import CardBody from "../../components/dashboard/card-body/CardBody";
import TwoColTable from "../../components/dashboard/two-col-table/TwoColTable";
import HeadingBar from "../../components/heading-bar/HeadingBar";
import ContrastPipingTrimAbaya from "../../assets/images/products/Contrast Piping Trim Abaya.jpg";
import CurvyFrontLinebuttonAbaya from "../../assets/images/products/Curvy Front Line button Abaya.jpg";
import PearlEmbroideryAbaya from "../../assets/images/products/Pearl Embroidery Abaya.jpg";
import PrintedSleeveAbaya from "../../assets/images/products/Printed Sleeve Abaya.jpg";
import AbayaSetwithSideSlet from "../../assets/images/products/Abaya Set with Side Slet.jpg";
import WishListCard from "../../components/dashboard/wishlist-card/WishListCard";
import BottomShadowCard from "../../components/dashboard/bottom-shadow-card/BottomShadowCard";
import Modal from "../../components/dashboard/modal/Modal";

const productsData = {
  headings: [
    "#",
    "name",
    "designer name",
    "Category",
    "Current Qty",
    "Base Price",
    "Options",
  ],
  data: [
    {
      value: ["1", "test 2", "Aliya Almusawi", "Abaya", "10", "500.00"],
    },
    {
      value: ["2", "TEST", "Aliya Almusawi", "Abaya", "87", " 1.00"],
    },
  ],
};

function Products() {
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };
  return (
    <>
      <Layout>
        <div className="w-[100%] min-h-[100vh] h-[auto]">
          <AdminPanelLayout active={"Products"}>
            <HeadingBar heading={"products"} />
            <div>
              <AddNewCard />
            </div>
            <div className="w-[100%] pt-[12px]">
              <TitleAndTableCard width={"w-[100%] h-[100%]"}>
                <TableHeader>
                  <div className="w-[100%] flex justify-between items-center pr-[12px]">
                    All Products
                    <input
                      type="text"
                      className="admin-input w-[230px] h-[44px] fwl text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                      placeholder="Search Product"
                      id="search_product"
                    />
                  </div>
                </TableHeader>

                <CardBody>
                  <div className="overflow-auto">
                    <TwoColTableWithHeading
                      data={productsData}
                      tableType={true}
                      toggleModal={toggleModal}
                    />
                  </div>
                </CardBody>
              </TitleAndTableCard>
            </div>
          </AdminPanelLayout>
        </div>
      </Layout>
      <Modal
        isShowModal={isShowModal}
        toggleModal={toggleModal}
        page={"products"}
      />
    </>
  );
}

function AddNewCard() {
  return (
    <Link href="/dashboard/products/uploads">
      <a>
        <div className="w-[194px] rounded-[.25rem] bg-[#fff] taPoint3 cursor-pointer drop-shadow-[0_0.15rem_0.25rem_rgba(0,0,0,0.075)] hover:drop-shadow-[0_0.5rem_0.4rem_rgba(0,0,0,0.15)] p-[1rem] mb-[20px]">
          <div className="w-[60px] h-[60px] bg-[#6c757d] rounded-full mx-auto mb-[1rem] flex justify-center items-center text-[#fff] text-[40px]">
            <i className="las la-plus text-[#fff]"></i>
          </div>
          <p className="fwr text-[1.125rem] text-[#c53a19] capitalize">
            add new product
          </p>
        </div>
      </a>
    </Link>
  );
}

export default Products;
