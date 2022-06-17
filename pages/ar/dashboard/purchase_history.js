import React, { useEffect } from "react";
import Image from "next/image";
import Layout from "../../../components/rtl/layout/Layout";
import AdminPanelLayout from "../../../components/rtl/dashboard/admin-panel-layout/AdminPanelLayout";
import TitleAndTableCard from "../../../components/rtl/dashboard/title-and-table-card/TitleAndTableCard";
import TableHeader from "../../../components/rtl/dashboard/table-header/TableHeader";
import TwoColTableWithHeading from "../../../components/rtl/dashboard/two-col-table-with-heading/TwoColTableWithHeading";
import CardBody from "../../../components/rtl/dashboard/card-body/CardBody";
import TwoColTable from "../../../components/rtl/dashboard/two-col-table/TwoColTable";
import HeadingBar from "../../../components/rtl/heading-bar/HeadingBar";
import verified from "../../../assets/images/icons/verified.png";

function PurchaseHistory() {
  useEffect(() => {
    document.querySelector("body").style.direction = 'rtl'
  }, [])
  return (
    <>
      <Layout>
        <div className="w-[100%] min-h-[100vh] h-[auto]">
          <AdminPanelLayout active={"PurchaseHistory"}>
            <TitleAndTableCard>
              <TableHeader>تاريخ شراء</TableHeader>
            </TitleAndTableCard>
          </AdminPanelLayout>
        </div>
      </Layout>
    </>
  );
}

export default PurchaseHistory;
