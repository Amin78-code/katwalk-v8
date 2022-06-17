import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../../components/rtl/layout/Layout";
import AdminPanelLayout from "../../../components/rtl/dashboard/admin-panel-layout/AdminPanelLayout";
import TitleAndTableCard from "../../../components/rtl/dashboard/title-and-table-card/TitleAndTableCard";
import TableHeader from "../../../components/rtl/dashboard/table-header/TableHeader";
import TwoColTableWithHeading from "../../../components/rtl/dashboard/two-col-table-with-heading/TwoColTableWithHeading";
import CardBody from "../../../components/rtl/dashboard/card-body/CardBody";
import HeadingBar from "../../../components/rtl/heading-bar/HeadingBar";
import styles from "../../../components/rtl/WithdrawRequests.module.css";
import Modal from "../../../components/rtl/dashboard/modal/Modal";

const productsData = {
  headings: ["#", "date", "amount", "status", "message"],
  data: [],
};

function WithdrawRequests() {
  useEffect(() => {
    document.querySelector("body").style.direction = 'rtl'
  }, [])

  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };
  return (
    <>
      <Layout>
        <div className="w-[100%] min-h-[100vh] h-[auto]">
          <AdminPanelLayout active={"WithdrawRequests"}>
            <HeadingBar heading={"سحب الأموال"} />
            <div className="flex gap-x-[1.2rem] flex-col      lg:flex-row gap-y-[1rem]      lg:gap-y-[0]">
              <PendingBalance />
              <AddNewCard toggleModal={toggleModal} />
            </div>
            <div className="w-[100%] pt-[12px]">
              <TitleAndTableCard width={"w-[100%] h-[100%]"}>
                <TableHeader>Withdraw Request history</TableHeader>
                <CardBody>
                  <TwoColTableWithHeading
                    data={productsData}
                    tableType={true}
                  />
                </CardBody>
              </TitleAndTableCard>
            </div>
          </AdminPanelLayout>
        </div>
      </Layout>
      {/* {isShowModal && isShowModal == true ? ( */}
      <Modal isShowModal={isShowModal} toggleModal={toggleModal} page={"withdraw"} />
      {/* ) : (
        ""
      )} */}
    </>
  );
}

function AddNewCard({ toggleModal }) {
  return (
    <>
      {/* <Link href="/ar/dashboard/products/uploads"> */}
      <a onClick={() => toggleModal()}>
        <div className="w-[283px] rounded-[.25rem] bg-[#fff] taPoint3 cursor-pointer drop-shadow-[0_0.15rem_0.25rem_rgba(0,0,0,0.075)] hover:drop-shadow-[0_0.5rem_0.4rem_rgba(0,0,0,0.15)] p-[1rem] mb-[20px]">
          <div className="w-[60px] h-[60px] bg-[#6c757d] rounded-full mx-auto mb-[1rem] flex justify-center items-center text-[#fff] text-[40px]">
            <i className="las la-plus text-[#fff]"></i>
          </div>
          <p className="fwr text-[1.125rem] text-[#c53a19] capitalize text-center">
            Send Withdraw Request
          </p>
        </div>
      </a>
      {/* </Link> */}
    </>
  );
}

function PendingBalance() {
  return (
    <div
      className={`${styles.pending_balance_div} w-[283px] h-[100%] rounded-[.25rem] taPoint3 drop-shadow-[0_0.15rem_0.25rem_rgba(0,0,0,0.075)] p-[1rem] text-center`}
    >
      <div className="w-[30px] h-[30px] bg-[#ca4c87] rounded-full mx-auto mb-[1rem] flex justify-center items-center text-[#fff] text-[18px]">
        $
      </div>
      <p className="fwb text-[12px] text-[#fff] uppercase">
        sar <span>0</span>
      </p>
      <p className="fwr text-[13px] text-[#fff] opacity-50 capitalize text-center">
        Pending Balance
      </p>
    </div>
  );
}

export default WithdrawRequests;
