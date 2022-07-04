import React, { useState, useRef } from "react";
import Image from "next/image";
import CardBody from "../card-body/CardBody";
import TableHeader from "../table-header/TableHeader";
import styles from "./ManageProfileChangeYourEmail.module.css";
import TitleAndTableCard from "../title-and-table-card/TitleAndTableCard";
import ChooseImage from "../choose-image/ChooseImage";

function ManageProfileChangeYourEmail({
  data,
  title,
  handleChangeEmail,
  updateEmail,
}) {
  const basicInfoCardBody = useRef("");
  const openCardBody = () => {
    basicInfoCardBody.current.classList.toggle(styles.slide_card_body);
  };
  return (
    <>
      <TitleAndTableCard
        width={"w-[100% mb-[20px]"}
        zindex={" z-[2] relative "}
      >
        <TableHeader>
          <div className="flex justify-between">
            {title ? title : "Title"}
            <p
              className="flex uppercase text-[14px] items-center cursor-pointer"
              onClick={() => openCardBody("basicInfo")}
            >
              تعديل
              <i className="las la-ellipsis-v mx-[5px]"></i>
            </p>
          </div>
        </TableHeader>
        <div
          ref={basicInfoCardBody}
          className={`max-h-0 h-auto overflow-hidden taPoint6`}
        >
           <CardBody>
            <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
              <p className="w-[100%]     lg:w-[100%] md:w-[23.4%] text-[#1b1b28] text-[13px] px-0        lg:px-[5px] capitalize pt-[7px]">
                {data[0].name}
              </p>
              <div className="w-[100%] px-0     lg:px-[15px] flex">
                <input
                  type="text"
                  className="admin-input w-[100%] h-[44px] fwl text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                  value={data[0].value}
                  placeholder={data[0].placeHolder ? data[0].placeHolder : ""}
                  onChange={(e) => handleChangeEmail(e, 0)}
                />

                <button className="ffr text-[0.875rem] text-[#111723] hover:text-[#fff] h-[40px] leading-[40px] tracking-[0.5px] uppercase hover:bg-[#111723] block taPoint3 px-[15px] ml-[.25rem] mt-[.15rem]">
                  verify
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => updateEmail()}
                className="light-brown-btn ffr text-[0.875rem] text-[#fff] h-[40px] leading-[40px] tracking-[0.5px] uppercase bg-[#c83e27] block px-[15px] m-[.25rem]"
              >
                update email
              </button>
            </div>
          </CardBody>
        </div>
      </TitleAndTableCard>
    </>
  );
}

export default ManageProfileChangeYourEmail;
