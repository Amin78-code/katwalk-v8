import React, { useState, useRef } from "react";
import Image from "next/image";
import CardBody from "../card-body/CardBody";
import TableHeader from "../table-header/TableHeader";
import styles from "./ManageProfileBasicInfo.module.css";
import TitleAndTableCard from "../title-and-table-card/TitleAndTableCard";
import ChooseImage from "../choose-image/ChooseImage";

function ManageProfileBasicInfo({ data, title }) {
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
              className="flex ffr uppercase text-[14px] items-center cursor-pointer"
              onClick={() => openCardBody("basicInfo")}
            >
              edit
             <i className="las la-ellipsis-v mx-[5px]"></i>
            </p>
          </div>
        </TableHeader>
        <div
          ref={basicInfoCardBody}
          className={`max-h-0 h-auto overflow-hidden taPoint6`}
        >
          <CardBody>
            {data.map((value) => {
              return (
                <>
                  {value.value && value.value == "loadImg" ? (
                    <ChooseImage data={value} shopsPage={true} />
                  ) : (
                    <div key={value.name} className="fwr flex mb-[1rem] flex-col      lg:flex-row">
                      <p className="w-[23.4%] text-[#1b1b28] text-[13px] px-0        lg:px-[5px] capitalize pt-[7px]">
                        {value.name}
                      </p>
                      <div className="w-[100%] px-0     lg:px-[15px]">
                        {value.name == "Photo" ? (
                          <div className={`"w-[100%]"`}>
                            <div
                              className="flex admin-input relative w-[100%] h-[44px] leading-[30px] bg-[#fff] border-[1px]  rounded-[.25rem]  border-[#ced4da]"
                              onClick={() => showModal()}
                            >
                              <div className="fwl text-[#495057] text-[1rem] py-[0.375rem] px-[0.75rem]">
                                Choose file
                              </div>
                            </div>
                          </div>
                        ) : (
                          <input
                            type="text"
                            className="admin-input w-[100%] h-[44px] fwl text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                            value={value.value}
                            placeholder={
                              value.placeHolder ? value.placeHolder : ""
                            }
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
                update profile
              </button>
            </div>
          </CardBody>
        </div>
      </TitleAndTableCard>
    </>
  );
}

export default ManageProfileBasicInfo;
